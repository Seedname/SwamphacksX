import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({className}) => {
    return (
        <button className={className} onClick={()=>{loginWithRedirect();}}>Login</button>
    );
}

export default LoginButton;