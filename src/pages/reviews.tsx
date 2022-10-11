import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProductReview from '../components/ProductReview';
import Rate from '../components/Rate';
import Rating from '../components/Rating';
import { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    const getreviews = async () => {
      const res = await fetch(`/api/reviews`);
      const data = await res.json();
      setreviews(data);
    };
    getreviews();
  }, []);
  return (
    <>
      <Header />
      <div className="reviews-wrap">
        <h1>Reviews</h1>
        <div className="wrap">
          <div className="small-side">
            <div>
              <h2>Customers Reviews</h2>
              <div className="flex-start">
                <h3>4.0</h3>
                <Rating rating={4} />
              </div>
              <p>75,900 Reviews</p>
            </div>
            <div className="hh"></div>
            <div>
              <Rate star={5} strength={85} num={23534} />
              <Rate star={4} strength={65} num={2353} />
              <Rate star={3} strength={50} num={904} />
              <Rate star={2} strength={35} num={904} />
              <Rate star={1} strength={5} num={904} />
            </div>
            <div className="hh"></div>
          </div>
          {reviews.map((item, index) => {
            return (
              <div key={index}>
                <div className="line"></div>
                <ProductReview item={item} />
              </div>
            );
          })}
          <div className="paginator">
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="left"
            >
              <path
                d="M1.14343 0.500061L8 7.68373L1.14343 14.8674L6.39665e-07 13.6694L5.71475 7.68373L5.81476e-08 1.6972L1.14343 0.500061Z"
                fill="#46312A"
              />
            </svg>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.14343 0.500061L8 7.68373L1.14343 14.8674L6.39665e-07 13.6694L5.71475 7.68373L5.81476e-08 1.6972L1.14343 0.500061Z"
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

export default Reviews;
