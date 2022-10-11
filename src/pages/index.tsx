import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import Link from 'next/link';
import { Parallax, Background } from 'react-parallax';
import Review from '../components/Review';
import ProductItem from '../components/ProductItem';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />

      <div className="main">
        <div className="text">
          <h1>Your skin at it's best</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            scelerisque ut sapien, posuere non. Faucibus egestas
          </p>
          <Link href="/shop">
            <a>
              <button className="p-btn hvr-bounce-to-bottom">
                <span>Shop Now</span>
              </button>
            </a>
          </Link>
        </div>
      </div>

      <Parallax bgImage="/images/main2.png" strength={150}>
        <div className="pa-inner">
          <div className="right-m">
            <h3 className="m-h3 text-white">Get To Know US </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              scelerisque ut sapien, posuere non. Faucibus egestas consectetur
              interdum amet id elementum. Lacinia non augue amet at. Nunc
              fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Et, scelerisque ut sapien, posuere
              non. Faucibus egestas consectetur interdum amet id elementum.
              Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae
              nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              scelerisque ut sapien, posuere non. Faucibus egestas consectetur
              interdum amet id elementum
            </p>
            <button className="p-btn hvr-bounce-to-bottom">
              <span>Shop Now</span>
            </button>
          </div>
        </div>
      </Parallax>
      <div className="featured">
        <div className="wrap">
          <h3 className="m-h3">Featured Products</h3>
          <div className="row">
            {products.map((item: any, index: number) => {
              return (
                <div className="col-md-3 col-xs-6" key={index}>
                  <ProductItem item={item} />
                </div>
              );
            })}
          </div>
          <Link href="/shop">
            <a className="more">
              See all products <img src="/images/arrow-right.png" />
            </a>
          </Link>
        </div>
      </div>
      <div className="reviews">
        <div className="wrap">
          <h2>REVIEWS</h2>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <Review name="Tyller Peri" />
            </div>
          </div>
          <div className="nav">
            <svg
              className="navLeft"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                r="29.25"
                transform="matrix(-1 0 0 1 30 30)"
                stroke="#46312A"
                strokeWidth="1.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.5 30C40.5 29.8011 40.421 29.6103 40.2803 29.4696C40.1397 29.329 39.9489 29.25 39.75 29.25H22.0605L26.781 24.531C26.8507 24.4612 26.906 24.3785 26.9438 24.2873C26.9815 24.1962 27.0009 24.0986 27.0009 24C27.0009 23.9014 26.9815 23.8037 26.9438 23.7126C26.906 23.6215 26.8507 23.5387 26.781 23.469C26.7113 23.3992 26.6285 23.3439 26.5374 23.3062C26.4463 23.2684 26.3486 23.249 26.25 23.249C26.1514 23.249 26.0537 23.2684 25.9626 23.3062C25.8715 23.3439 25.7887 23.3992 25.719 23.469L19.719 29.469C19.6492 29.5386 19.5937 29.6214 19.5559 29.7125C19.5181 29.8036 19.4987 29.9013 19.4987 30C19.4987 30.0986 19.5181 30.1963 19.5559 30.2874C19.5937 30.3785 19.6492 30.4613 19.719 30.531L25.719 36.531C25.7887 36.6007 25.8715 36.656 25.9626 36.6938C26.0537 36.7315 26.1514 36.7509 26.25 36.7509C26.3486 36.7509 26.4463 36.7315 26.5374 36.6938C26.6285 36.656 26.7113 36.6007 26.781 36.531C26.8507 36.4612 26.906 36.3785 26.9438 36.2873C26.9815 36.1962 27.0009 36.0986 27.0009 36C27.0009 35.9014 26.9815 35.8037 26.9438 35.7126C26.906 35.6215 26.8507 35.5387 26.781 35.469L22.0605 30.75H39.75C39.9489 30.75 40.1397 30.671 40.2803 30.5303C40.421 30.3896 40.5 30.1989 40.5 30Z"
                fill="#46312A"
              />
            </svg>
            <svg
              className="navRight"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="29.25"
                stroke="#46312A"
                strokeWidth="1.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 30C19.5 29.8011 19.579 29.6103 19.7197 29.4696C19.8603 29.329 20.0511 29.25 20.25 29.25H37.9395L33.219 24.531C33.1493 24.4612 33.094 24.3785 33.0562 24.2873C33.0185 24.1962 32.9991 24.0986 32.9991 24C32.9991 23.9014 33.0185 23.8037 33.0562 23.7126C33.094 23.6215 33.1493 23.5387 33.219 23.469C33.2887 23.3992 33.3715 23.3439 33.4626 23.3062C33.5537 23.2684 33.6514 23.249 33.75 23.249C33.8486 23.249 33.9463 23.2684 34.0374 23.3062C34.1285 23.3439 34.2113 23.3992 34.281 23.469L40.281 29.469C40.3508 29.5386 40.4063 29.6214 40.4441 29.7125C40.4819 29.8036 40.5013 29.9013 40.5013 30C40.5013 30.0986 40.4819 30.1963 40.4441 30.2874C40.4063 30.3785 40.3508 30.4613 40.281 30.531L34.281 36.531C34.2113 36.6007 34.1285 36.656 34.0374 36.6938C33.9463 36.7315 33.8486 36.7509 33.75 36.7509C33.6514 36.7509 33.5537 36.7315 33.4626 36.6938C33.3715 36.656 33.2887 36.6007 33.219 36.531C33.1493 36.4612 33.094 36.3785 33.0562 36.2873C33.0185 36.1962 32.9991 36.0986 32.9991 36C32.9991 35.9014 33.0185 35.8037 33.0562 35.7126C33.094 35.6215 33.1493 35.5387 33.219 35.469L37.9395 30.75H20.25C20.0511 30.75 19.8603 30.671 19.7197 30.5303C19.579 30.3896 19.5 30.1989 19.5 30Z"
                fill="#46312A"
              />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
