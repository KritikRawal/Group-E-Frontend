import  { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/layouts/Header"
import Footer from "./components/layouts/footer";
import Home from "./components/Home";

import ProductDetails from './components/product/ProductDetails';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile  from './components/user/Profile';

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userActions'
import store from './store'
function App() {

  

  
    useEffect(() => {
      store.dispatch(loadUser())
    }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
        <Route path = "/" component={Home} exact />
        <Route path = "/search/:keyword" component={Home} />
        <Route path = "/product/:id" component={ProductDetails} exact />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/me" component={Profile} exact/>

     
      
        <Footer />
        </div>
     
      </div>
    </Router>
  );
}

export default App;
