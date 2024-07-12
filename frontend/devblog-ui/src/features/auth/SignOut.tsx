import {useAuth} from "../../context/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const SignOut = () => {

    const {logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Call logout function
        logout();
        // Redirect to home page
        navigate('/');
    }, []);

    return null;

}