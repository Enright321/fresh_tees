import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='logo' to='/'>
              FreshTees
            </Link>
            <i className='fas fa-tshirt fa-2x'></i>
          </div>
          <div>
            <Link to='/cart'>
              Cart
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
            <Link to='signin.html'>Sign In</Link>
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
