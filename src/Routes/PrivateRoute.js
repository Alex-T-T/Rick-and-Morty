import { Navigate, Outlet } from 'react-router-dom';


export default function PrivateRoute() {
    const isLoggedIn = JSON.parse(window.localStorage.getItem('userInfo'))

    if (!isLoggedIn) {
        return <Navigate to='login' />
    }

    return <Outlet />
}