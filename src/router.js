import { Route, Router, Switch, Redirect } from 'react-router-dom'

import history from './config/history'

//views
import Post from './views/Post'
import Networking from './views/Networking'
import Panel from './views/Panel'
import Profile from './views/Profile'

import SignIn from './views/Sign/Signin'
import { isAuthenticated } from './config/auth'

const AdminRoute = ({ ...rest }) => {  //autenticacao de rota para api
    if (!isAuthenticated()) {
      return <Redirect to="/signin" />;
    }
    return <Route {...rest} />;
  };
  

const Routers = () => ( //retorna direto por escopo / Router é a instancia principal
    <Router history={history}> 
        <Switch> 
            <AdminRoute exact path="/" component={Post} />
            <AdminRoute exact path="/minharede" component={Networking} />
            <AdminRoute exact path="/painel" component={Panel} />
            <Route exact path="/perfil" component={Profile} />

            {/*---Sign---*/}
            <Route exact path="/signin" component={SignIn} />
        </Switch>
    </Router>
)

export default Routers