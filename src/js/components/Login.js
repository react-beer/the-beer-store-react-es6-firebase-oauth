import React from 'react';
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
import Firebase from 'firebase';
const ref = new Firebase('https://the-beer-store.firebaseio.com/');

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: ''
    };

    autoBind(this, 'authHandler');
  }

  componentWillMount() {
    let token = localStorage.getItem('token');
    
    if (token) {
      ref.authWithCustomToken(token, this.authHandler);
    }
  }

  authenticate(provider) {
    ref.authWithOAuthPopup(provider, this.authHandler);
    // ref.authWithOAuthRedirect(provider, this.authHandler);
  }

  logout() {
    ref.unauth();
    localStorage.removeItem('token');
    this.setState({
      uid: null
    });
  }

  authHandler(error, authData) {
    if (error) {
      console.error(error);
      return;
    }

    localStorage.setItem('token', authData.token);

    // const storeRef = ref.child(this.props.params.storeId);
    ref.on('value', (snapshot) => {
      let data = snapshot.val() || {};

      if (!data.owner) {
        ref.set({
          owner: authData.uid
        });
      }

      this.setState({
        uid: authData.uid,
        owner: data.owner || authData.uid
      });
    });
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
                  block
                >
                  <Icon name="facebook" /> Sign in with Facebook
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-github"
                  onClick={this.authenticate.bind(this, 'github')}
                  block
                >
                  <Icon name="github" /> Sign in with GitHub
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-google"
                  block
                >
                  <Icon name="google" /> Sign in with Google
                </Button>
                <Button
                  bsSize="large"
                  className="btn-social btn-twitter"
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
