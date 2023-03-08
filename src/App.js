import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './Login.jsx';
import Main from './Main.jsx';
import Get from './Get.jsx'
import Del from './Del.jsx';
import Upda from './Upda.jsx';
function App() {
    return (  
            <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/Login" component={Login}></Route>
                <Route exact path="/Main" component={Main}></Route>
                <Route exact path="/Get" component={Get}></Route>
                <Route exact path="/Upda" component={Upda}></Route>
                <Route exact path="/Del" component={Del}></Route>
            </Switch>
            </Router>
    );
}
export default App;