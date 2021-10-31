import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Addservice from './components/Addservices/Addservice';
import Product from './components/Products/Product';
import Login from './components/Login/Login/Login';
import AuthProvider from './components/contexts/AuthProvider';
import Dashboard from './components/Dasboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Allorder from './components/Allorder/Allorder';


function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
      <Menu/>
        <Switch>

        <Route exact path="/about">
          <About></About>
        
            </Route>

            <Route exact path="/">
            <Header></Header>
            </Route>
            <Route path="/home">
        <Header></Header>
        
            </Route>

            <Route path="/contact">

{/* <Dashboard></Dashboard> */}
        <Contact></Contact>
            </Route>

            <Route path="/myorder">

<Dashboard></Dashboard>
        
            </Route>

            <PrivateRoute path="/Services">
<Product></Product>
            </PrivateRoute>
            <Route path="/addServices">
<Addservice/>
            </Route>
            <Route path="/allorder">
<Allorder></Allorder>
            </Route>

            <Route path="/login">
              
             <Login></Login>
                   
                 </Route>
      </Switch>
      
      </Router>


       </AuthProvider>
  
    </div>
  );
}

export default App;
