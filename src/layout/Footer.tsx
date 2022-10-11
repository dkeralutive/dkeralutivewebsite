function Footer() {
  return (
    <div className="footer">
      <div className="wrap">
        <div className="row">
          <div className="col-md-3">
            <h2>Company</h2>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>How to use</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Shop</h2>
            <ul>
              <li>
                <a>Oils</a>
              </li>
              <li>
                <a>Creams</a>
              </li>
              <li>
                <a>Body lotion</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>More</h2>
            <ul>
              <li>
                <a>Wholesale</a>
              </li>
              <li>
                <a>Preorder</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>My Account</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h2>Join</h2>
            <form>
              <input placeholder="Email address" />
              <button>
                <img src="/images/arrow-right-w.png" />
              </button>
            </form>
            <p>
              Sign up for our newsletter to receive updates on new products,
              events, offers, and more. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-3">
              <h2>Need help?</h2>
              <ul>
                <li>
                  <a>Check out our support page</a>
                </li>
              </ul>

              <ul className="socials">
                <li>
                  <a>
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a>
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="payments">
                <img src="/images/Visa.png" />
                <img src="/images/Mastercard.png" />
                <img src="/images/PayPal.png" />
                <img src="/images/Amex.png" />
              </div>
              <ul>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Return Policy</a>
                </li>
                <li>
                  <a>Terms Of Services</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
