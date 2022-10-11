import React, { useContext } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

function CheckOut() {
  const { setopencart, currency, cartitems, removefromcart, deletefromcart } =
    useContext(AppContext);
  const [active, setActive] = React.useState(1);
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
      <div className="checkout-wrap">
        <Link href="#">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <img src="/images/arrow-down.png" className="goBack" />
          </a>
        </Link>
        <div className="wrap">
          <h1>Check Out</h1>
          {cartitems.map((item: any, index: number) => {
            return (
              <div className="info" key={index}>
                <div className="flex">
                  <div className="img-hold">
                    <img src="/images/prod1.png" />
                  </div>
                  <div className="div">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="sm-show">
                      <p>QTY {item.count}</p>
                      <h3>
                        {currency} {item.price}
                      </h3>
                    </div>
                    <button
                      className="rem-btn"
                      onClick={() => deletefromcart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="sm-hide">QTY {item.count}</p>
                </div>
                <h3 className="sm-hide">
                  {currency} {item.price}
                </h3>
              </div>
            );
          })}
          <div className="subtotal">
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
          <Link href="/checkout-auth">
            <button className="p-btn p-btn2">
              <span>CONTINUE</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
