import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useRouter } from 'next/router';

function Orders() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="auth-wrap">
        <img
          src="/images/arrow-down.png"
          className="goBack"
          onClick={() => router.back()}
        />
        <div className="wrap wrap2">
          <h1>Orders</h1>
          <div className="auth-select active">
            <p style={{ textAlign: 'center' }}>
              No orders have been made yet, continue shopping to add orders
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
