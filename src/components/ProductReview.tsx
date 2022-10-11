import React from 'react';
import Rating from './Rating';

function ProductReview({ item }: any) {
  return (
    <div className="productReview">
      <div>
        <h2>{item.name}</h2>
        <Rating rating={item.rating} />
        <small>{item.review_date}</small>
      </div>
      <p>{item.review}</p>
    </div>
  );
}

export default ProductReview;
