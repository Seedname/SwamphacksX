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

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Login from './pages/Login/Login.jsx';
// import Logout from './pages/Logout/Logout';
// import Callback from './components/Callback'; // Create this component to handle the callback
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {
  return (
    <Auth0Provider 
      // domain="dev-qqmcm7oc7pbvgr83.us.auth0.com"
      // clientId="i4oGHkrNdGC8NfJMB8lxr7dH4DIJ97cN"
      // redirectUri={window.location.origin}
    >
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login />} />
           {/* <Route path="/logout" element={<Logout />} />
          <Route path="/callback" element={<Callback />} />  */}
        </Routes>
      </div>
    </Auth0Provider>
  );
};

export default App;