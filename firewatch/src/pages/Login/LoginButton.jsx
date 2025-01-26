import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Home/Home.module.css";
import dashBoardStyles from "../Dashboard/Dashboard.module.css";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button className= {styles.cta_button} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  ) : (
    <button className= {styles.cta_button} onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export const LoginLink = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <a className= {dashBoardStyles.cta_button} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</a>
      
  ) : (
    <a className= {dashBoardStyles.cta_button} onClick={() => loginWithRedirect()}>Log In</a>
  );
};


export default LoginButton;