import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';

function CartDrawer() {
  const {
    count,
    currency,
    opencart,
    setopencart,
    cartitems,
    removefromcart,
    deletefromcart,
    addtocart,
  } = useContext(AppContext);
  const subtotal = () => {
    let price = 0;
    cartitems.filter((el: any) => {
      price = price + el.price * el.count;
    });
    return price;
  };
  return (
    <>
      <div className={`cart ${opencart ? 'open' : ''}`}>
        <div className="cart-top">
          <h2>Bag ({count})</h2>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setopencart(false)}
          >
            <path
              d="M11.41 8.99999L18.7 1.70999C18.8638 1.51869 18.9494 1.27261 18.9397 1.02093C18.93 0.769257 18.8256 0.530518 18.6475 0.352424C18.4694 0.174329 18.2307 0.0699962 17.979 0.0602751C17.7274 0.0505539 17.4813 0.13616 17.29 0.299987L9.99997 7.58999L2.70997 0.289987C2.51867 0.12616 2.2726 0.0405547 2.02092 0.0502758C1.76924 0.059997 1.53051 0.164329 1.35241 0.342423C1.17432 0.520518 1.06998 0.759257 1.06026 1.01093C1.05054 1.26261 1.13615 1.50868 1.29997 1.69999L8.58997 8.99999L1.28997 16.29C1.18529 16.3796 1.10027 16.49 1.04025 16.614C0.980225 16.7381 0.946494 16.8732 0.941175 17.0109C0.935855 17.1487 0.959061 17.286 1.00934 17.4143C1.05961 17.5426 1.13587 17.6592 1.23332 17.7566C1.33078 17.8541 1.44733 17.9303 1.57565 17.9806C1.70398 18.0309 1.84131 18.0541 1.97903 18.0488C2.11675 18.0435 2.25188 18.0097 2.37594 17.9497C2.50001 17.8897 2.61033 17.8047 2.69997 17.7L9.99997 10.41L17.29 17.7C17.4813 17.8638 17.7274 17.9494 17.979 17.9397C18.2307 17.93 18.4694 17.8256 18.6475 17.6476C18.8256 17.4695 18.93 17.2307 18.9397 16.979C18.9494 16.7274 18.8638 16.4813 18.7 16.29L11.41 8.99999Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="cart-body">
          {cartitems.length == 0 ? (
            <p className="empty-cart">
              Your bag is empty. Continue browsing, or start with our best
              sellers below.
            </p>
          ) : (
            <>
              {cartitems.map((item: any, index: number) => {
                return (
                  <Link href={'/product/'} key={index}>
                    <a className="cart-item">
                      <span
                        className="del"
                        onClick={(e) => {
                          e.preventDefault();
                          deletefromcart(item.id);
                        }}
                      >
                        x
                      </span>
                      <div>
                        <p>{item.title}</p>
                        <div className="ff">
                          <div className="form">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                removefromcart(item);
                              }}
                            >
                              -
                            </button>
                            <input
                              value={item.count}
                              type="number"
                              onChange={() => {
                                removefromcart(item);
                              }}
                              onClick={(e) => e.preventDefault()}
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                addtocart(item);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <h3>
                            {currency} {item.price}
                          </h3>
                        </div>
                      </div>
                      <img src={`/images/${item.img}`} />
                    </a>
                  </Link>
                );
              })}
              <Link href="/shop">
                <a
                  className="p-btn p-btn1 cart-btn"
                  onClick={() => setopencart(false)}
                >
                  <span>CONTINUE SHOPPING</span>
                </a>
              </Link>
              <div className="cart-footer">
                <h1>
                  Subtotal
                  <span>
                    {currency} {subtotal()}
                  </span>
                </h1>
                <Link href="/checkout">
                  <a onClick={() => setopencart(false)}>
                    <button className="p-btn p-btn2 hvr-bounce-to-bottom">
                      <span>PROCEED TO CHECKOUT</span>
                    </button>
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`cart-out ${opencart ? 'open' : ''}`}
        onClick={() => setopencart(false)}
      ></div>
    </>
  );
}

export default CartDrawer;
