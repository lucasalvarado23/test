import React, { Fragment } from 'react';
import MailingList from './MailingList';

const Footer = () => (
  <Fragment>
    <MailingList />

    <footer className="push">
      <div className="content">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-header">
              <h6>homemade products</h6>
              
            </div>
            <p>
              All of our products are american made. Allow 7-15 days for products to arrive
            </p>
          </div>
          <nav className="footer-links">
            <dl>
              <dt className="footer-header">
                <h6>Our partners</h6>
              </dt>
              <dd>
                <a href="https://migueltransportacion.com/">Miguel Transportacion</a>
              </dd>
              <dd>
                <a href="http://www.graphsvid.com/">Important stuff</a>
              </dd>
            </dl>
          </nav>
          <nav className="footer-social">
            <dl>
              <dt className="footer-header">
                <h6>Follow us on social media</h6>
              </dt>
              <dd>
                <a href="/">Facebook</a>
              </dd>
              <dd>
                <a href="/">Instagram</a>
              </dd>
            </dl>
          </nav>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
