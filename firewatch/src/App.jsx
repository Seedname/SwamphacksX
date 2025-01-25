import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
//import LoginForm from './pages/Login/login-form'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/> */}
        {/* //<Route path='/login' element={<LoginForm/>} /> */}
      </Routes>
    </div>
  )
}

export default App