// import { GalleryVerticalEnd } from "lucide-react"
/*
import { LoginForm } from "./login-form"
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          FireWatch
        </a>
        <LoginForm />
      </div>
    </div>
  )
}*/
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// // const LoginButton = () => {
// //   const { loginWithRedirect } = useAuth0();

// //   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// // };

// // export default LoginButton;

// const Login = () => {
//     const { loginWithRedirect, isAuthenticated } = useAuth0();
//     // if (!isAuthenticated) {
//         loginWithRedirect();
//     // }
//     // else {
//         // window.location.href = '/dashboard';
//     // }
// }

// export default Login;

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      loginWithRedirect();
    }
  }, [isAuthenticated, navigate, loginWithRedirect]);

  return null;
};

export default Login;