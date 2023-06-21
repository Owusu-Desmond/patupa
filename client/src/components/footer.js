import '../css/footer.css';

const Footer = () => (
  <footer>
    <div className="footer-custom">
      <div className="footer-lists">
        <div className="footer-list-wrap">
          <h6>Order Toll Free</h6>
          <ul className="ftr-links-sub">
            <li>800-952-5592</li>
          </ul>
          <h6>International</h6>
          <ul className="ftr-links-sub">
            <li><a href="https://github.com/Owusu-Desmond">France</a></li>
            <li><a href="https://github.com/Owusu-Desmond">United Kingdom</a></li>
            <li><a href="https://github.com/Owusu-Desmond">United state</a></li>
          </ul>
        </div>
        <div className="footer-list-wrap">
          <h6>Customer Service</h6>
          <ul className="ftr-links-sub">
            <li><a href="https://github.com/Owusu-Desmond">Contact Us</a></li>
            <li><a href="https://github.com/Owusu-Desmond">Ordering</a></li>
            <li><a href="https://github.com/Owusu-Desmond">Shipping &amp; Delivery</a></li>
            <li><a href="https://github.com/Owusu-Desmond">International Orders</a></li>
            <li><a href="https://github.com/Owusu-Desmond">Gift Cards</a></li>
            <li><a href="https://github.com/Owusu-Desmond">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-list-wrap">
          <h6>About Patupa</h6>
          <ul className="ftr-links-sub">
            <li><a href="https://github.com/Owusu-Desmond">Our Company</a></li>
            <li><a href="https://github.com/Owusu-Desmond">Careers</a></li>
            <li><a href="https://github.com/Owusu-Desmond">Business &amp; Trade Sales</a></li>
            <li><a href="https://github.com/Owusu-Desmond"><strong>Shop Our Catalog</strong></a></li>
            <li><a href="https://github.com/Owusu-Desmond">Patupa BLOG</a></li>
          </ul>
        </div>
        <div className="footer-list-wrap">
          <h6>My Account</h6>
          <ul className="ftr-links-sub">
            <li className="ftr-Login">
              <span className="link login-trigger">Access My Account</span>
            </li>
            <li>
              <span className="link">Track My Order</span>
            </li>
            <li className="ftr-Login">
              <span className="link ftr-access-my-account">
                Access My Account
              </span>
            </li>
            <li>
              <span className="link">Track My Order</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h6>Follow Us</h6>
        <ul>
          <li>
            <a href="https://github.com/Owusu-Desmond" title="Facebook">
              <img
                width="24"
                height="24"
                alt="Like us on Facebook"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Owusu-Desmond" title="Google+">
              <img
                width="24"
                height="24"
                alt="Follow us on Google+"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Owusu-Desmond" rel="noreferrer" target="_blank">
              <img
                width="24"
                height="24"
                alt="Follow us on Pinterest"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Owusu-Desmond" rel="noreferrer">
              <img
                width="24"
                height="24"
                alt="Follow us on Instagram"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Owusu-Desmond" title="Twitter">
              <img
                width="67"
                alt="Follow us on Twitter"
                src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-legal">
      <p>
        &copy; 2022 Patupa Inc. All Rights Reserved. |
        <a href="https://github.com/Owusu-Desmond">Privacy Policy</a>
        {' '}
        |
        <a href="https://github.com/Owusu-Desmond">Terms of Use</a>
        {' '}
        |
        <a href="/help/terms-of-sale.html">Terms of Sale</a>
      </p>
      <p>
        20 million users registered this year to buy products from Patupa.
      </p>
    </div>
  </footer>
);

export default Footer;
