// import { useEffect } from "react"
// import {getPagination, getProducts} from '../../Redux/actions/product/productActions'
// import { useDispatch, useSelector } from "react-redux"



// const Pagination = () => {


// const dispatch = useDispatch()
// const currentPage = useSelector((state) => state.currentPage)
// const pageNumber = useSelector((state) => state.pageNumber)


// useEffect(() =>{
//     dispatch(getProducts())
// }, [dispatch])

// const handlePageChange = (pageNumber) => {
//     dispatch(getPagination(pageNumber))
// }

//     return (
//         <div>
//             {
//                 pageNumber.prev && (
//                     <button onClick={() => handlePageChange(pageNumber.prev)}>Prev Page</button>
//                 )
//             }
//             <span>{currentPage}</span>
//             {
//                 pageNumber.next && (
//                     <button onClick={() => handlePageChange(pageNumber.next)}>Next Page</button>
//                 )
//             }
//         </div>
//     )
// }



// export default Pagination