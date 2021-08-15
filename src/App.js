import logo from './logo.svg';
import './App.css';
import Sidemenu from "./sidemenu"
import Topmenu from "./topmenu";
import Dashboard from './dashboard';
import Users from "./users"
import Products from './product';
import Createuser from './createuser'
import Edituser from './edituser';
import createproduct from './createproduct';
import Editproduct from './editproduct';
import { UserProvider } from './usercontext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div id="wrapper">
    <Sidemenu></Sidemenu>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topmenu></Topmenu>
      <div class="container-fluid">
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/products" component={Products} exact={true}/>
            <Route path="/create-product" component={createproduct} exact={true}/> 
            <Route path="/users" component={Users} exact={true}/>
            <Route path="/create-user" component={Createuser} exact={true}/>
            <Route path="/users/edit/:id" component={Edituser} exact={true}/>
            <Route path="/products/edit/:id" component={Editproduct} exact={true}/>
          
           
          </Switch>
      </div>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
