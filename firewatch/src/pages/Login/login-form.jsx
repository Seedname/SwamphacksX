import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = ({className}) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (!isAuthenticated && (
      <button onClick={()=>loginWithRedirect()}>Login</button>
    )
  )
};

export default LoginForm;