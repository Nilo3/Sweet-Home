import CreateProduct from "../CreateProduct/CreateProduct"
import {Link} from 'react-router-dom'




const Dashboard = () => {

    return(
        <div>
            <Link to={"/createProduct"}>
        <button> <CreateProduct/></button>
            </Link>
        <h1>estamos en el panel administrador</h1>

        </div>
        )
}



export default Dashboard