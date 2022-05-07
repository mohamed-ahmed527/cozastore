import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Features from './Features';
import Home from './Home';
import Navbar from './Navbar';
import ProductDetaills from './ProductDetails';
import Shop from './Shop';
import Footer from './Footer';
import Cart from './Cart';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/Prods/:id">
              <ProductDetaills  />
            </Route>
            <Route exact path="/Shop">
              <Shop />
            </Route>
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Cart">
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
