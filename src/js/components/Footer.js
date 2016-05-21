import React from 'react';
import Icon from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    let fixedBottomStyle = {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0
    };
    let fixedBottom = (this.props.fixedBottom ? fixedBottomStyle : {});

    return (
      <footer className="footer" style={fixedBottom}>
        <p>
          Made with <span className="love"><Icon name="heart" /></span>
          <span> by </span>
          <a href="https://github.com/brenopolanski">Breno Polanski</a>
        </p>
      </footer>
    );
  }
}

Footer.propTypes = {
  fixedBottom: React.PropTypes.bool
};

Footer.defaultProps = {
  fixedBottom: false
};

export default Footer;
