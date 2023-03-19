
import { Google } from "../components";
import { GoogleOAuthProvider } from '@react-oauth/google';



export const AuthPage = () => {

    const clientId = process.env.REACT_APP_CLIENT_ID_KEY

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Google />
        </GoogleOAuthProvider>
    )
}