import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-[50vh]" ><span className="loading loading-spinner loading-lg text-primary"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" />
}

    PrivateRoute.propTypes={
        children:PropTypes.node
    }

export default PrivateRoute