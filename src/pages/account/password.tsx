import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useRouter } from 'next/router';

function Password() {
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
          <h1>Password</h1>
          <div className="auth-select active ">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="m-input"
                placeholder="Current Password"
                type="password"
              />
              <input
                className="m-input"
                placeholder="New Password"
                type="password"
              />
              <input
                className="m-input"
                placeholder="Confirm New Password"
                type="password"
              />
              <button className="p-btn p-btn2">
                <span>Change Password</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Password;
