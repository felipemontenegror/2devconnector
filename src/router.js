import { Route, Router, Switch } from 'react-router-dom'

import history from './config/history'

//views
import Post from './views/Post'
import Networking from './views/Networking'
import Panel from './views/Panel'
import Profile from './views/Profile'

import SignIn from './views/Sign/Signin'

const Routers = () => ( //retorna direto por escopo / Router é a instancia principal
    <Router history={history}> 
        <Switch> 
            <Route exact path="/" component={Post} />
            <Route exact path="/minharede" component={Networking} />
            <Route exact path="/painel" component={Panel} />
            <Route exact path="/perfil" component={Profile} />

            {/*---Sign---*/}
            <Route exact path="/signin" component={SignIn} />
        </Switch>
    </Router>
)

export default Routers