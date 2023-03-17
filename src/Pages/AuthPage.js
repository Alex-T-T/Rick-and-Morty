
import Google from "../components/Google";
import { GoogleOAuthProvider } from '@react-oauth/google';



export const AuthPage = () => {

    return (
        <GoogleOAuthProvider clientId='1033718669490-bk0fh6jiun7b2dnac91f70f35emaaor9.apps.googleusercontent.com'>
            <Google />
        </GoogleOAuthProvider>
    )
}