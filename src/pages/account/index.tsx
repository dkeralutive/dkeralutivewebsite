import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Dashboard() {
  const router = useRouter();
  const signOut = () => {
    router.push('/account/auth');
  };

  return (
    <>
      <Header />
      <div className="account-wrap">
        <div className="wrap">
          <h1>Account</h1>
          <h4>Welcome back James</h4>
          <ul className="account-ul">
            <li>
              <Link href="/account/orders">
                <a>
                  <div>
                    <h3>Orders</h3>
                    <span>View your orders</span>
                  </div>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.90621 -5.90353e-08L11.334 9.42857L1.90621 18.8571L0.333985 17.2848L8.19176 9.42857L0.333984 1.57124L1.90621 -5.90353e-08Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/personal-details">
                <a>
                  <div>
                    <h3>Personal Details</h3>
                    <span>View and edit your personal details</span>
                  </div>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.90621 -5.90353e-08L11.334 9.42857L1.90621 18.8571L0.333985 17.2848L8.19176 9.42857L0.333984 1.57124L1.90621 -5.90353e-08Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/addresses">
                <a>
                  <div>
                    <h3>Addresses</h3>
                    <span>View and edit your addresses</span>
                  </div>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.90621 -5.90353e-08L11.334 9.42857L1.90621 18.8571L0.333985 17.2848L8.19176 9.42857L0.333984 1.57124L1.90621 -5.90353e-08Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/payments">
                <a>
                  <div>
                    <h3>Payment Methods</h3>
                    <span>View and edit your payment methods</span>
                  </div>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.90621 -5.90353e-08L11.334 9.42857L1.90621 18.8571L0.333985 17.2848L8.19176 9.42857L0.333984 1.57124L1.90621 -5.90353e-08Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/password">
                <a>
                  <div>
                    <h3>Password</h3>
                    <span>Edit your password</span>
                  </div>
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 12 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.90621 -5.90353e-08L11.334 9.42857L1.90621 18.8571L0.333985 17.2848L8.19176 9.42857L0.333984 1.57124L1.90621 -5.90353e-08Z"
                      fill="#D5D5D5"
                    />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={() => signOut()} className="signout">
          Sign Out
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
