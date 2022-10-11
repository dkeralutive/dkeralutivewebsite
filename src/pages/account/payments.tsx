import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useRouter } from 'next/router';

function Payments() {
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
        <div className="wrap f-p">
          <h1>Payment Methods</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payments;
