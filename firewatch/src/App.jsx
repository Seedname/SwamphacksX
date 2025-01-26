import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports'
import Login, { DOMAIN, CLIENT_ID } from './pages/Login/Login';
import { Auth0Provider } from '@auth0/auth0-react'
//import LoginForm from './pages/Login/login-form'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute

const App = () => {
  return (
    <Auth0Provider 
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/login" element={<Login />} />             */}
          {/* <Route
            path='/dashboard' 
            element={
              // <ProtectedRoute>
                <Dashboard/>
                <Login/>
                <Home/>
              </ProtectedRoute>
            }/> */}
          {/* <Route path='/login' element={<Login/>} /> */}
        </Routes>
    </div>
    </Auth0Provider>
  )
}

export default App