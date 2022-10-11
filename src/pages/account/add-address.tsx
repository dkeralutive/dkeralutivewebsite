import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { useRouter } from 'next/router';

function AddAddress() {
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
          <h1>Add Address</h1>
          <div className="auth-select active ">
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="m-input" placeholder="First Name" />
              <input className="m-input" placeholder="Last Name" />
              <input className="m-input" placeholder="Phone number" />
              <input
                className="m-input"
                placeholder="Alt. Phone number (optional)"
              />
              <input className="m-input" placeholder="Address" />
              <input className="m-input" placeholder="Zip Code" />
              <input className="m-input" placeholder="State" />
              <input className="m-input" placeholder="City" />
              <button className="p-btn p-btn2">
                <span>ADD NEW ADDRESS</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddAddress;
