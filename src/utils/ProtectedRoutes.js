import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ children, ...rest }) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return (
        token ? <Outlet /> : <Navigate to='/Home' />
    )
};
export default ProtectedRoutes;
