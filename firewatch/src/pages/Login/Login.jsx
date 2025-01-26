//import { GalleryVerticalEnd } from "lucide-react"

// import { LoginForm } from "./login-form"
import { useAuth0 } from "@auth0/auth0-react";

// export default function Login() {
//   return (
//     <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <a href="#" className="flex items-center gap-2 self-center font-medium">
//           <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
//             <GalleryVerticalEnd className="size-4" />
//           </div>
//           FireWatch
//         </a>
//         <LoginForm />
//       </div>
//     </div>
//   )
// }

export const DOMAIN = 'dev-qqmcm7oc7pbvgr83.us.auth0.com';
export const CLIENT_ID = 's66NIrhZLocictYcNrvD0HLUe4pPDhgM';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    loginWithRedirect();
}

export default Login;