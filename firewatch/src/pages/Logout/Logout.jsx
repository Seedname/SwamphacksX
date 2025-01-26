// import { useAuth0 } from '@auth0/auth0-react'; // Import the Auth0 hook
// import  React  from 'react';


// function LogoutButton() {

//   const { logout } = useAuth0(); // Access the logout function

//   return (

//     logout({ returnTo: '/' })


//   );

// }

// export default logout;


import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import styles from "../Home/Home.module.css";
const Logout = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({ returnTo: window.location.origin });
  }, [logout]);

  return null;
};

export default Logout;