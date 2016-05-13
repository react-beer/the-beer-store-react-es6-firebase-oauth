import React from 'react';
import { browserHistory } from 'react-router';
import autoBind from 'react-autobind';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Cart from './Cart';
import Products from './Products';
import Footer from './Footer';

// Firebase
import Rebase from 're-base';
const base = Rebase.createClass('https://the-beer-store.firebaseio.com/');

class Store extends React.Component {
  constructor(props) {
    super(props);

    let { location } = this.props;

    this.state = {
      uid: location.state ? location.state.uid : null,
      beers: {},
      cart: {}
    };

    autoBind(this, 'addToCart', 'removeFromCart');
  }

  componentWillMount() {
    if (this.state.uid === this.props.params.userId) {
      this.ref = base.syncState(this.props.params.userId + '/cart', {
        context: this,
        state: 'cart'
      });

      this.loadBeers();
    }
    else {
      this.logout();
    }
  }

  componentWillUnmount() {
    if (this.ref) {
      base.removeBinding(this.ref);
    }
  }

  loadBeers() {
    this.setState({
      beers: require('../utils/data-beers')
    });
  }

  addToCart(key, amount) {
    this.state.cart[key] = this.state.cart[key] + amount || amount;
    this.setState({
      cart: this.state.cart
    });
  }

  removeFromCart(key) {
    this.state.cart[key] = null;
    this.setState({
      cart: this.state.cart
    });
  }

  logout() {
    base.unauth();
    localStorage.removeItem('token');
    browserHistory.push({ pathname: '/' });
  }

  render() {
    return (
      <Grid>
        <Header />
        <Cart
          beers={this.state.beers}
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
          logout={this.logout}
        />
        <Products beers={this.state.beers} addToCart={this.addToCart} />
        <Footer />
      </Grid>
    );
  }
}

export default Store;
