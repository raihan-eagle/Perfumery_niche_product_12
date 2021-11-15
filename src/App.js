import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Home from './component/Home/Home';
import Login from './component/Login/Login'
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute'
import Register from './component/Login/Register/Register';
import DashBoard from './component/DashBoard/DashBoard/DashBoard';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Explore from './component/Explore/Explore';
import Footer from './component/Footer/Footer';
import Notfound from './component/Notfound/Notfound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
              
              <Switch>
                  <Route exact path='/'>
                  <Home></Home> 
                  </Route>
                  <Route path='/home'>
                    <Home></Home>
                  </Route>
                  <Route path='/explore'>
                    <Explore></Explore>
                  </Route>
                  <Route path='/login'>
                  <Login></Login>
                  </Route>
                  <Route path='/register'>
                  <Register></Register>
                  </Route>
                  <PrivateRoute path='/dashboard'>
                  <DashBoard></DashBoard>
                  </PrivateRoute>
                  <PrivateRoute path='/services/:serviceid'>
                  <ServiceDetails></ServiceDetails>
                  </PrivateRoute>
                  <Route path='*'>
                    <Notfound></Notfound>
                  </Route>                
              </Switch>
              <Footer></Footer>
              
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
