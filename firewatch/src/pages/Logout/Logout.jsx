import { useAuth0 } from "@auth0/auth0-react";

const Logoff = () => {
    const { user, logoff } = useAuth0();
    logoff();
}

export default Logoff;