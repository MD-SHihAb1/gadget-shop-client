import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../pages/Lodder/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    } 
    if(user){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;