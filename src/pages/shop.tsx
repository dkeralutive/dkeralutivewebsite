import React from 'react';
import Header from '../layout/Header';
import ProductItem from '../components/ProductItem';
import Footer from '../layout/Footer';
import { useEffect, useState } from 'react';

function Shop() {
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
      <div className="wrap">
        <div className="shop"></div>
      </div>
      <div className="m-breadcrumb">
        <div className="wrap">
          <p>
            <strong>Home</strong> + All Products
          </p>
        </div>
      </div>
      <div className="featured pb" style={{ paddingTop: 50 }}>
        <div className="wrap">
          <h3>Featured Products</h3>
          <div className="row">
            {products.map((item, index) => {
              return (
                <div className="col-md-3 col-xs-6" key={index}>
                  <ProductItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="featured" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h3>All Products</h3>
          <div className="row">
            {products.map((item, index) => {
              return (
                <div className="col-md-3 col-xs-6" key={index}>
                  <ProductItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
