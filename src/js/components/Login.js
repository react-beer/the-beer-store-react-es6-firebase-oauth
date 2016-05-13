import React from 'react';
import { browserHistory } from 'react-router';
import autoBind from 'react-autobind';
import { 
  Grid, 
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import Header from './Header';
import Footer from './Footer';

// Firebase
import Rebase from 're-base';
const base = Rebase.createClass('https://the-beer-store.firebaseio.com/');

class Login extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, 'authenticate', 'authHandler');
  }

  componentWillMount() {
    let token = localStorage.getItem('token');
    
    if (token) {
      base.authWithCustomToken(token, this.authHandler);
    }
  }

  authenticate(provider) {
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(error, authData) {
    if (error) {
      console.error(error);
      return;
    }
    else {
      localStorage.setItem('token', authData.token);
      browserHistory.push({ 
        pathname: `/store/${authData.uid}`, 
        state: { uid: authData.uid } 
      });
    }
  }

  render() {
    return (
      <Grid>
        <Header />
        <div className="login">
          <Row>
            <Col md={4} mdOffset={4}>
              <form>
                <Button
                  bsSize="large"
                  className="btn-social btn-facebook"
                  onClick={this.authenticate.bind(null, 'facebook')}
                  block
                >
                  <Icon name="facebook" /> Sign in with Facebook
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-github"
                  onClick={this.authenticate.bind(null, 'github')}
                  block
                >
                  <Icon name="github" /> Sign in with GitHub
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-google"
                  onClick={this.authenticate.bind(null, 'google')}
                  block
                >
                  <Icon name="google" /> Sign in with Google
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-twitter"
                  onClick={this.authenticate.bind(null, 'twitter')}
                  block
                >
                  <Icon name="twitter" /> Sign in with Twitter
                </Button>
              </form>
            </Col>
          </Row>
        </div>
        <Footer fixedBottom />
      </Grid>
    );
  }
}

export default Login;
