import notfound from '../Assets/Page Not Found.webp';
import { Link } from 'react-router-dom';
export const PageNotFound=()=>{
    return <>
        <div className="container d-flex flex-column">
            <img src={notfound} alt="not found" className='img-fluid w-60'/>
            <p className='text-center mt-3' to='/'>
                <Link to='/' className='btn btn-danger'>Go to Home page</Link>
            </p>
        </div>
    </>
}