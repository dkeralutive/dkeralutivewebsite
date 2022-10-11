import { useState } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Account() {
  const [active, setActive] = useState(1);
  const [remember, setRemember] = useState(false);
  const [showpassword, setshowpassword] = useState(true);
  const router = useRouter();
  const signIn = () => {
    router.push('/account');
  };
  return (
    <>
      <Header />
      <div className="auth-wrap">
        <div className="wrap">
          <h1>Welcome Back</h1>
          <div className="auth">
            <h3
              className={active == 1 ? 'active' : ''}
              onClick={() => setActive(1)}
            >
              Sign In
            </h3>
            <h3
              className={active == 2 ? 'active' : ''}
              onClick={() => setActive(2)}
            >
              Register
            </h3>
          </div>
          <div className={`auth-select ${active == 1 ? 'active' : ''}`}>
            <p>Sign in with your Email and password</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="m-input" placeholder="Email" />
              <div className="m-input-wrap">
                <input
                  className="m-input"
                  placeholder="Password"
                  type={showpassword ? 'password' : 'text'}
                />
                <button
                  className="m-btn"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  show
                </button>
              </div>
              <Link href="/forgot-password">
                <a className="forgot">Forgot password?</a>
              </Link>
              <div className="remember">
                <div
                  className={`m-check ${remember ? 'active' : ''}`}
                  onClick={() => setRemember(!remember)}
                ></div>
                <p>Remember me (Optional)</p>
              </div>
              <button className="p-btn p-btn2" onClick={() => signIn()}>
                <span> SIGN IN</span>
              </button>
            </form>
          </div>
          <div className={`auth-select ${active == 2 ? 'active' : ''}`}>
            <p>Create your account</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="m-input" placeholder="First name" />
              <input className="m-input" placeholder="Last name" />
              <input className="m-input" placeholder="Email" />
              <div className="m-input-wrap">
                <input
                  className="m-input"
                  placeholder="Password"
                  autoComplete="false"
                  type={showpassword ? 'password' : 'text'}
                />
                <button
                  className="m-btn"
                  onClick={() => setshowpassword(!showpassword)}
                >
                  show
                </button>
              </div>
              <button className="p-btn p-btn2">
                <span>CREATE ACCOUNT</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
