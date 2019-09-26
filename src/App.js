import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './containers/home'
import CategoryList from "./containers/categoryList"
import Profile from "./pages/Profile/Profile"
import Recommend from "./pages/Recommend/Recommend"
import ShopCart from "./pages/ShopCart/ShopCart"
import Search from './containers/search'
function App () {
  return (
    <div>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/categorylist' component={CategoryList} />
        <Route path='/recommend' component={Profile} />
        <Route path='/shopcart' component={Recommend} />
        <Route path='/profile' component={ShopCart} />
        <Route path='/search' component={Search} />
        <Redirect path='/' to="/home"></Redirect>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
