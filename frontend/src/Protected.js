import { Navigate } from "react-router-dom";


function Protected({children}) {
    const user = localStorage.getItem('user');
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
}

export default Protected;