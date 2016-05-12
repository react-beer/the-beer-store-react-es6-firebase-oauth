import React from 'react';
import Icon from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Made with <span className="love"><Icon name="heart" /></span>
          <span> by </span>
          <a href="https://github.com/brenopolanski">Breno Polanski</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
