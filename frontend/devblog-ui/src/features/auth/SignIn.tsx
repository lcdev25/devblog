import {useAuth} from "../../context/AuthContext";

export const SignIn = () => {

    const {isAuthenticated, login, logout} = useAuth();

    return (
        <>
            <input type="button" onClick={login} value="Sign In"/>
        </>
    );

}