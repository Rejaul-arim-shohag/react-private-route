import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
