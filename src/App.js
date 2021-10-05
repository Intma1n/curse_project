import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import {Header} from './Components/Header/Header'
import {AboutReconstrucctionPage} from "./Components/AboutReconstruction/AboutReconstrucctionPage";
import {SingleReconstruction} from "./Components/SingleReconstruction/SingleReconstruction";
import {LogInPage} from "./Components/LogIn/LogInPage";
import {HomePage} from "./Components/Home/HomePage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path = '/' exact component={HomePage}>

            </Route>
        
            <Route path = '/about-reconstruction' component = {AboutReconstrucctionPage}>
            
            </Route>

            <Route path ='/single-reconstruction' component={SingleReconstruction}>

            </Route>

            <Route path = '/login' component={LogInPage}>

            </Route>
        </Switch>
    </div>
  );
}

export default withRouter(App);
