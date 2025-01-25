import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({className}) => {
    console.log(className);
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return (
            <button className={className} onClick={()=>{logout();}}>Logout</button>
        );
    }

    return (
        <button className={className} onClick={()=>{loginWithRedirect();}}>Login</button>
    );
}

export default LoginButton;