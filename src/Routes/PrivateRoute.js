import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

export default function PrivateRoute() {
    const { isLoggedIn } = useContext(UserContext)
    console.log('isLoggedIn1: ', isLoggedIn);
    console.log('UserContext: ', UserContext);

    if (!isLoggedIn) {
        console.log('isLoggedIn 2: ', isLoggedIn);

        return <Navigate to='login' />
    }

    return <Outlet />
}