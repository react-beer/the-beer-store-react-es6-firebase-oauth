import React from 'react';
import { 
  Grid, 
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Icon from 'react-fontawesome';
import Header from './Header';
import Footer from './Footer';

class Login extends React.Component {
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
