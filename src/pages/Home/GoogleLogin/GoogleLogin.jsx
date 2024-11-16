import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {

    const {GoogleLogin} = useAuth();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        GoogleLogin().then(() =>{
            navigate("/");
        })
        
    };
    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleLogin} className="btn bg-base-100">
                <FcGoogle className="text-3xl" />
                
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;