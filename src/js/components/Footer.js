import React from 'react';
import classNames from 'classnames';
import Icon from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    let fixedBottom = (this.props.fixedBottom ? 'fixed-bottom' : '');

    return (
      <footer className={classNames('footer', fixedBottom)}>
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
