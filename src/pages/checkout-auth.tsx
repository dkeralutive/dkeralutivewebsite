import React, { useContext } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { AppContext } from '../context/AppContext';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Link from 'next/link';

function CheckOutAuth() {
  Modal.setAppElement('#__next');
  const { setopencart, currency, cartitems, removefromcart, deletefromcart } =
    useContext(AppContext);
  const [active, setActive] = React.useState(1);
  const [showpassword, setshowpassword] = React.useState(true);
  const [save, setsave] = React.useState(true);
  const [open, setopen] = React.useState(false);
  const router = useRouter();
  const subtotal = () => {
    let price = 0;
    cartitems.filter((el: any) => {
      price = price + el.price * el.count;
    });
    return price;
  };
  return (
    <>
      <Header />
      <div className="checkout-wrap checkout-auth">
        <Link href="#">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <img src="/images/arrow-down.png" className="goBack goBack1" />
          </a>
        </Link>
        <div className="wrap">
          <h1>Check Out</h1>
          <div className="row">
            {/* items mobile*/}
            <div className="col-md-6 sm-show">
              <div className="sticky-div">
                <div className="subtotal msub">
                  {cartitems.map((item: any, index: number) => {
                    return (
                      <div className="info" key={index}>
                        <div className="flex">
                          <div className="img-hold">
                            <img src="/images/prod1.png" />
                          </div>
                          <div className="div">
                            <h3>{item.title}</h3>
                            <div>
                              <p>QTY {item.count}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="sm-hide">
                          {currency} {item.price}
                        </h3>
                      </div>
                    );
                  })}
                  <li>
                    <span>Subtotal</span>
                    <span>
                      {currency} {subtotal()}
                    </span>
                  </li>
                  <li>
                    <span>Delivery Information</span>
                    <span>---</span>
                  </li>
                  <li className="total">
                    <b>Total</b>
                    <b>
                      {currency} {subtotal()}
                    </b>
                  </li>
                </div>
              </div>
            </div>
            {/*items*/}
            <div className="col-md-6 pr-50">
              <h2 className="nt">Sign In</h2>
              <h5>Sign in to proceed to payment. </h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-md-8">
                    <input className="m-input" placeholder="Email" />
                    <div className="m-input-wrap">
                      <input
                        className="m-input"
                        placeholder="Password"
                        type={showpassword ? 'password' : 'text'}
                      />
                      <button
                        className="m-btn"
                        onClick={() => setshowpassword(!showpassword)}
                      >
                        show
                      </button>
                    </div>
                    <Link href="/forgot-password">
                      <a className="forgot">Forgot password?</a>
                    </Link>
                    <button className="p-btn p-btn2 w-full">CONTINUE</button>
                    <p className="sac">
                      <span>Dont have an account?</span>
                      <Link href="/account/signup">
                        <a className="forgot">Sign Up</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
              <h2>Delivery Details</h2>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input className="m-input" placeholder="Last Name" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="Phone Number" />
                </div>
                <div className="col-md-6">
                  <input
                    className="m-input"
                    placeholder="Alt. Phone Number (optional)"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="Address" />
                </div>
                <div className="col-md-6">
                  <input className="m-input" placeholder="Zip Code" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="State" />
                </div>
                <div className="col-md-6">
                  <input className="m-input" placeholder="City" />
                </div>
              </div>

              <div className="remember">
                <div
                  className={`m-check ${save ? 'active' : ''}`}
                  onClick={() => setsave(!save)}
                ></div>
                <p>Set as default address (Optional)</p>
              </div>
              <h2>Billing Details</h2>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="Card Holders Name" />
                </div>
                <div className="col-md-6">
                  <input className="m-input" placeholder="Card Number" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input className="m-input" placeholder="Valid Through" />
                </div>
                <div className="col-md-6">
                  <input className="m-input" placeholder="CCV" />
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="p-btn p-btn2 w-full"
                    onClick={() => setopen(true)}
                  >
                    <span>CONFIRM</span>
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="p-btn p-btn1 w-full">
                    <span>PAYPAL</span>
                  </button>
                </div>
              </div>
            </div>

            {/* items mobile*/}
            <div className="col-md-6 sm-hide">
              <div className="sticky-div">
                <div className="subtotal msub">
                  {cartitems.map((item: any, index: number) => {
                    return (
                      <div className="info" key={index}>
                        <div className="flex">
                          <div className="img-hold">
                            <img src="/images/prod1.png" />
                          </div>
                          <div className="div">
                            <h3>{item.title}</h3>
                            <div>
                              <p>QTY {item.count}</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="sm-hide">
                          {currency} {item.price}
                        </h3>
                      </div>
                    );
                  })}
                  <li>
                    <span>Subtotal</span>
                    <span>
                      {currency} {subtotal()}
                    </span>
                  </li>
                  <li>
                    <span>Delivery Information</span>
                    <span>---</span>
                  </li>
                  <li className="total">
                    <b>Total</b>
                    <b>
                      {currency} {subtotal()}
                    </b>
                  </li>
                </div>
              </div>
            </div>
            {/*items*/}
          </div>
          <div className="acc">
            <h3>Accepted Payment Methods</h3>
            <div></div>
            <div className="payments">
              <img src="/images/Visa.png" />
              <img src="/images/Mastercard.png" />
              <img src="/images/PayPal.png" />
              <img src="/images/Amex.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/*--modal---*/}
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setopen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="successModal">
          <h2>Order Successful</h2>
          <svg
            width="67"
            height="66"
            viewBox="0 0 67 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5 61.875C25.8419 61.875 18.4974 58.8328 13.0823 53.4177C7.66718 48.0026 4.625 40.6581 4.625 33C4.625 25.3419 7.66718 17.9974 13.0823 12.5823C18.4974 7.16718 25.8419 4.125 33.5 4.125C41.1581 4.125 48.5026 7.16718 53.9177 12.5823C59.3328 17.9974 62.375 25.3419 62.375 33C62.375 40.6581 59.3328 48.0026 53.9177 53.4177C48.5026 58.8328 41.1581 61.875 33.5 61.875ZM33.5 66C42.2521 66 50.6458 62.5232 56.8345 56.3345C63.0232 50.1458 66.5 41.7521 66.5 33C66.5 24.2479 63.0232 15.8542 56.8345 9.66548C50.6458 3.47678 42.2521 0 33.5 0C24.7479 0 16.3542 3.47678 10.1655 9.66548C3.97678 15.8542 0.5 24.2479 0.5 33C0.5 41.7521 3.97678 50.1458 10.1655 56.3345C16.3542 62.5232 24.7479 66 33.5 66Z"
              fill="#46312A"
            />
            <path
              d="M45.751 20.5013C45.7216 20.5298 45.694 20.5601 45.6685 20.5921L31.3423 38.8452L22.7087 30.2074C22.1222 29.661 21.3465 29.3635 20.545 29.3776C19.7435 29.3917 18.9788 29.7164 18.412 30.2833C17.8452 30.8501 17.5205 31.6148 17.5063 32.4163C17.4922 33.2178 17.7897 33.9935 18.3362 34.5799L29.2509 45.4988C29.545 45.7923 29.8951 46.0236 30.2805 46.1789C30.6658 46.3341 31.0785 46.4101 31.4939 46.4024C31.9093 46.3947 32.3189 46.3035 32.6982 46.134C33.0775 45.9646 33.4189 45.7205 33.7018 45.4163L50.1688 24.8326C50.7295 24.2441 51.0361 23.4585 51.0223 22.6458C51.0084 21.833 50.6753 21.0584 50.0948 20.4893C49.5144 19.9203 48.7333 19.6025 47.9204 19.6047C47.1076 19.607 46.3283 19.9291 45.751 20.5013Z"
              fill="#46312A"
            />
          </svg>
          <p>Thank you for your purchase !</p>
          <h4>Your order ID is: 234258350</h4>
          <p>You will recieve a confirmation email with order details</p>
          <Link href="/shop">
            <button className="p-btn p-btn2">
              <span>CONTINUE SHOPPING</span>
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
}

export default CheckOutAuth;

const customStyles = {
  content: {
    top: '150px',
    left: '0',
    right: '0',
    bottom: 'auto',
    transform: '0',
    transition: 'all .4s ease-in-out',
    border: 0,
  },
};
