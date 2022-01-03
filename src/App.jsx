
import LandingPage from './pages/LandingPage';
import {Switch, Route} from 'react-router-dom'
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer'
import DetailProduct from './pages/DetailProduct';
import CartList from './pages/CartList';
import Whishlist from './pages/Whishlist'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return(
    <>
      <NavbarComponent/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/products/:id' component={DetailProduct}/>
        <Route path='/chart-list' component={CartList}/>
        <Route path='/whishlist' component={Whishlist}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
      <Footer/>
    </>
  )
};

export default App;