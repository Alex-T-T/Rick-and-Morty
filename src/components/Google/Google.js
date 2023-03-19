
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { UserInfo } from '../UserInfo';
import { Logo } from '../Logo/Logo';
import css from './Google.module.css'

export const Google = () => {
    const navigate = useNavigate();

    return (
        <div className={css.google}>
            <Logo />

            <GoogleLogin
                onSuccess={(res) => {
                    const userInfo = jwtDecode(res.credential)
                    toast.success(<UserInfo userName={userInfo.name} avatar={userInfo.picture} />, { autoClose: 6000 });
                    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
                    navigate('/characters')
                }}
                onError={() => {
                    alert('Login Failed! Try again!');
                }}
            />
        </div>
    )
}

