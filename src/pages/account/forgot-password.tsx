import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ForgotPassword() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="auth-wrap">
        <Link href="/account/auth">
          <img src="/images/arrow-down.png" className="goBack" />
        </Link>
        <div className="wrap f-p">
          <h1>Forgot Password</h1>
          <div className="auth-select active">
            <p>Let's get you back into your account</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="m-input" placeholder="Email" />
              <button className="p-btn p-btn2">
                <span>SEND RESET LINK</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;
