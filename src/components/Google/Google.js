
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { UserInfo } from '../UserInfo';
import { Logo } from '../Logo/Logo';
import css from './Google.module.css'
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

export const Google = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(UserContext)

    return (
        <div className={css.google}>
            <Logo />

            <GoogleLogin
                onSuccess={(res) => {
                    const userInfo = jwtDecode(res.credential)
                    toast.success(<UserInfo userName={userInfo.name} avatar={userInfo.picture} />, { autoClose: 6000 });
                    setIsLoggedIn(true)
                    navigate('/characters')
                }}
                onError={() => {
                    alert('Login Failed! Try again!');
                }}
            />
        </div>
    )
}

