import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLayout from "../../layouts/mainLayout";
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem('adminToken');

  // Check if the userToken exists and is valid (you should implement token validation)
  const isAuthenticated = !!adminToken;

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    navigate('/login', { replace: true });
    // Return null if you want to render nothing when not authenticated
    return null;
  }

  // Render the children if authenticated
  return <MainLayout>{children}</MainLayout>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
