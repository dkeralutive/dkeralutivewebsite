import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Rating from './Rating';

function ProductItem({ item }: any) {
  const { currency, addtocart } = useContext(AppContext);
  return (
    <Link href={'/product/' + item.slug}>
      <a className="product">
        <div className="img-hold">
          <img src={'/images/' + item?.img} alt={item?.title} />
        </div>
        <Rating rating={item.rating} />
        <p>
          <span style={{ display: item?.old_price ? 'inline-block' : 'none' }}>
            {currency}
            {item?.old_price}
          </span>
          {currency}
          {item?.price}
        </p>
        <h4>{item?.title}</h4>
        <button
          className="p-btn p-btn2"
          style={{ width: '85%' }}
          onClick={(e) => {
            e.preventDefault();
            addtocart(item);
          }}
        >
          <span>Add To Bag</span>
        </button>
      </a>
    </Link>
  );
}

export default ProductItem;
