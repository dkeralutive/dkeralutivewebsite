import { useContext, useState, useEffect } from 'react';
import Header from '../../layout/Header';
import ProductItem from '../../components/ProductItem';
import Footer from '../../layout/Footer';
import { AppContext } from '../../context/AppContext';
import ProductReview from '../../components/ProductReview';
import { useRouter } from 'next/router';

function Product() {
  const { addtocart, currency } = useContext(AppContext);
  const [active, setActive] = useState(1);
  const [product, setProduct] = useState<any>('');
  const [products, setProducts] = useState([]);
  const [reviews, setreviews] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const id = 1;
    const getProducts = async () => {
      const res = await fetch(`/api/products/`);
      const data = await res.json();
      let product = data.filter(function (el: any) {
        return el.slug == router.query.slug;
      });
      product = product[0];
      setProduct(product);
      const res2 = await fetch(`/api/latestproducts/`);
      const data2 = await res2.json();
      setProducts(data2);
      const res3 = await fetch(`/api/reviews`);
      const data3 = await res3.json();
      setreviews(data3);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="m-breadcrumb">
        <div className="wrap wrap2">
          <p>
            <strong>Home</strong> + <strong> All Products</strong> +{' '}
            {product?.title}
          </p>
        </div>
      </div>
      <div className="wrap wrap2">
        <div className="productInfo row">
          <div className="col-md-7">
            <div className="carousel">
              <img src="/images/cleft.png" className="img" />
              <div className="image">
                <img src="/images/prod1.png" />
              </div>
              <img src="/images/cright.png" className="img" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="info">
              <h1>{product?.title} </h1>
              <p>{product?.description}</p>
              <h3 className="m-h3">More Details</h3>

              <p className="price">
                {product?.old_price ? (
                  <span>
                    {currency} {product?.old_price}
                  </span>
                ) : (
                  <></>
                )}
                {currency} {product?.price}
              </p>
              <div className="br"></div>
              <h3>Size</h3>
              <p className="small">100 ml</p>
              <button
                className="p-btn p-btn2"
                onClick={() => addtocart(product)}
              >
                <span>Add To Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="select-wrap">
        <div className="select">
          <h3
            className={active == 1 ? 'active' : ''}
            onClick={() => setActive(1)}
          >
            Description
          </h3>
          <h3
            className={active == 2 ? 'active' : ''}
            onClick={() => setActive(2)}
          >
            Reviews
          </h3>
        </div>
        <div className="wrap">
          <div className={`select-prod ${active == 1 ? 'active' : ''}`}>
            <h3>Product</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              scelerisque ut sapien, posuere non. Faucibus egestas consectetur
              interdum amet id elementum. Lacinia non augue amet at. Nunc
              fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Et, scelerisque ut sapien, posuere
              non. Faucibus egestas consectetur interdum amet id elementum.
              Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae
              nisl.
            </p>
            <h3>Key Ingredients</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              scelerisque ut sapien, posuere non. Faucibus egestas consectetur
              interdum amet id elementum. Lacinia non augue amet at. Nunc
              fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Et, scelerisque ut sapien, posuere
              non. Faucibus egestas consectetur interdum amet id elementum.
              Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae
              nisl.
            </p>
            <h3>How To Apply</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              scelerisque ut sapien, posuere non. Faucibus egestas consectetur
              interdum amet id elementum. Lacinia non augue amet at. Nunc
              fringilla bibendum nisl, vitae nisl.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Et, scelerisque ut sapien, posuere
              non. Faucibus egestas consectetur interdum amet id elementum.
              Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae
              nisl.
            </p>
          </div>
          <div className={`select-prod ${active == 2 ? 'active' : ''}`}>
            {reviews.map((item, index) => {
              return (
                <div key={index}>
                  <div className="line"></div>
                  <ProductReview item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="featured available">
        <div className="wrap">
          <h3 className="m-h3">Also Available</h3>
          <div className="row">
            {products.map((item, index) => {
              return (
                <div className="col-md-4 col-xs-6" key={index}>
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

export default Product;
