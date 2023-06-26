// import { getCategory, uploadProduct } from "../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";




const UploadProduct = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.category)
    const [upload, setUpload] = useState({
        name: "",
        price: 0,
        image: "",
        description: "",
        category: [],

      })

    useEffect(() => {
        dispatch(getCategory())

    }, [dispatch])
    return (
        <div>
            
        </div>
    );
};



export default UploadProduct