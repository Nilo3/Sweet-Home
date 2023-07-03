import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../Redux/actions/actions';

function Chart() {
  const chartRef = useRef(null);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      const chart = echarts.init(chartRef.current);
      const orderData = orders[0].map((order) => order.totalPrice);
      console.log("data", orderData, orders);

      const options = {
        xAxis: {
          type: 'category',
          data: orders[0].map((order) =>  new Date(order.paidAt).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            }
          )) ,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: orderData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
          },
        ],
      };

      chart.setOption(options);
    }
  }, [orders]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
}

export default Chart;
