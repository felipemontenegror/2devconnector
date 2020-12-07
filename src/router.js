import { Route, Router, Switch } from 'react-router-dom'

import history from './config/history'

//views
import Post from './views/Post'
import Contato from './views/Contato'
import SignIn from './views/Sign/Signin'

const Routers = () => ( //retorna direto por escopo / Router é a instancia principal
    <Router history={history}> 
        <Switch> 
            <Route exact path="/" component={Post} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/signin" component={SignIn} />
        </Switch>
    </Router>
)

export default Routers