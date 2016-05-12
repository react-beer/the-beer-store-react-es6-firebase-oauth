import React from 'react';
import { Grid } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

class NotFound extends React.Component {
  render() {
    return (
      <Grid>
        <Header />
          <div className="msg-error">
            <h1 className="text-warning">Not Found!</h1>
          </div>
        <Footer fixedBottom />
      </Grid>
    );
  }
}

export default NotFound;
