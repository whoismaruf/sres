import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Registation from './pages/Registation';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <Registation></Registation>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
