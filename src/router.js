import { Route, Router, Switch } from 'react-router-dom'

import history from './config/history'

//views
import Home from './views/home'
import contato from './views/contato'

const Routers = () => ( //retorna direto por escopo / Router é a instancia principal
    <Router history={history}> 
        <Switch> 
            <Route path="/" component={Home} />
            <Route path="/contato" component={contato} />
        </Switch>
    </Router>
)

export default Routers