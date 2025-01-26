import { useAuth0 } from "@auth0/auth0-react";

const Logoff = () => {
    const { isAuthenticated, logoff } = useAuth0();
    if (isAuthenticated) {
        logoff();
    }
}

export default Logoff;