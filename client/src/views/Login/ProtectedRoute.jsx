import PropTypes from "prop-types";
import { useAuth } from "../../context/authContex";
import { Navigate } from "react-router-dom";

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
