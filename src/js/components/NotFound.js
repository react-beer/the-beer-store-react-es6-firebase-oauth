import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

class NotFound extends React.Component {
  render() {
    return (
      <Grid>
        <Header />
          <div className="msg-error">
            <h1 className="text-warning">Page Not Found!</h1>
            <p>Go to <Link to="/">Login Page</Link></p>
          </div>
        <Footer fixedBottom />
      </Grid>
    );
  }
}

export default NotFound;
