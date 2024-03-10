import { Navigate, Route } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard';

function ProtectedRoutes() {
    const isAuthenticated = true; // For simplicity, assuming the user is always authenticated
console.log(isAuthenticated)
  return (
    <Route>
      {isAuthenticated ? (
        <Route path="/dashboard" component={Dashboard} />
      ) : (
        <Navigate to="/login" />
      )}
    </Route>
  )
}

export default ProtectedRoutes