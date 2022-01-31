import useAuth from './Hooks/useAuth';
import {Route, Redirect} from 'react-router-dom';
const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuth();

    return (<Route {...rest}>{auth ? children : <Redirect to="login"/>}</Route>)
}
export default PrivateRoute;