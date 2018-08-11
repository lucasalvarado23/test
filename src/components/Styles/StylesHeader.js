import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Bright from '../../assets/img/shoes.jpeg';
import Unique from '../../assets/img/unique.png';

const StylesHeader = ({ style, header }) => {
  let Header = null;

  switch (header) {
    case 'Modern':
      Header = Modern;
      break;
    case 'Silver':
      Header = Silver;
      break;
    case 'Bright':
      Header = Bright;
      break;
    case 'Unique':
      Header = Unique;
      break;
    default:
      Header = null;
  }

  return (
    <header
      className="medium-header light push"
      style={{
        backgroundImage: `url(${Header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'scroll'
      }}>
      <div className="nav-container">
        <nav className="primary-nav">
          <Link to="/products">Products</Link>
          <Link to="/styles">Styles</Link>
        </nav>
        <nav className="secondary-nav light">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container light">
        <div className="content">
          <h1>
            {style}
            <span className="hide-content"> styles</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);
