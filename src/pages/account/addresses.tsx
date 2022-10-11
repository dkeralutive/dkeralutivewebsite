import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Addresses() {
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
        <div className="wrap">
          <h1>Address</h1>
          <div className="auth-select active">
            <p style={{ textAlign: 'center', margin: '90px 0px' }}>
              No address added yet
            </p>
            <Link href="/account/add-address">
              <a className="p-btn p-btn1">
                <span>ADD ADDRESS</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Addresses;
