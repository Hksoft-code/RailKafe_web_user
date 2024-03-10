import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Auth/Login'

function PublicRoutes() {
    return (
        <Routes>
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/login" component={Login} />
        </Routes>
    )
}

export default PublicRoutes