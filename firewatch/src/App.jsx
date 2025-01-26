/*import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports'
import Login, { DOMAIN, CLIENT_ID } from "./pages/Login/Login";
import { Auth0Provider } from '@auth0/auth0-react'
//import LoginForm from './pages/Login/login-form'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute

const App = () => {
  return (
    // <Auth0Provider 
    //   domain={DOMAIN}
    //   clientId={CLIENT_ID}
    //   //authorizationParams={{ redirect_uri: window.location.origin }}
    //   redirect_uri = {window.location.origin}
    // >
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/logout" element={<Logout/>} /> }
          {/* <Route path="/login" element={<Login />} />             }
          {/* <Route
            path='/dashboard' 
            element={
              // <ProtectedRoute>
                <Dashboard/>
                <Login/>
                <Home/>
              </ProtectedRoute>`
            }/> }
          {/* <Route path='/login' element={<Login/>} /> }
        </Routes>
    </div>
    //</Auth0Provider>
  )
}

export default App*/

// import React, {useEffect} from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home.jsx';
// import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import Reports from './pages/Reports/Reports.jsx';
// import Login from './pages/Login/Login.jsx';
// // import Logout from './pages/Logout/Logout';
// // import Callback from './components/Callback'; // Create this component to handle the callback
// import { useAuth0 } from '@auth0/auth0-react';
// // import { auth0 }
// const App = () => {

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       try {
//         const { getAccessTokenSilently } = useAuth0();
//         const token = await getAccessTokenSilently();
//         console.log(token);
//       } catch (error) {
//         console.error("Error getting access token:", error);
//       }
//     };

//     fetchAccessToken();
//   }, []);

//   return (
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/login" element={<Login />} />
//           {/* <Route path="/logout" element={<Logout />} /> */}
//            {/* <Route path="/logout" element={<Logout />} />
//           <Route path="/callback" element={<Callback />} />  */}
//         </Routes>
//       </div>
//   );
// };

// export default App;

import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Login from './pages/Login/Login.jsx';
import Logout from './pages/Logout/Logout';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;