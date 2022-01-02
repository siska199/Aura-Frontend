
import LandingPage from './pages/LandingPage';
import {Switch, Route} from 'react-router-dom'
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer'
import DetailProduct from './pages/DetailProduct';
import CartList from './pages/CartList';

const App = () => {
  return(
    <>
      <NavbarComponent/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/products/:id' component={DetailProduct}/>
        <Route path='/chart-list' component={CartList}/>
      </Switch>
      <Footer/>
    </>
  )
};

export default App;