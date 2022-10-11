import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CartDrawer from './CartDrawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

function Header() {
  const [active, setActive] = useState(false);
  const [toggle, settoggle] = useState(false);
  const { count, currency, setcurrency, opencart, setopencart } =
    useContext(AppContext);

  let router = useRouter();
  const [search, setsearch] = useState(false);
  useEffect(() => {
    /*
    let u = localStorage.getItem("xompsmpsnd101010299msiknsloa11292nsinsi");
    u = JSON.parse(u);
    if (u != null) {
      setUser(u);
    } else {
      setUser("");
    }*/
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [router]);
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta name="description" content="Dermile skin care" />

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>Dermile — Your Skin At It's Best</title>
        <meta name="title" content="Dermile — Your Skin At It's Best" />
        <meta
          name="description"
          content="Beauty, cosmetic & personal care. Your skin at its best! Nigerian 🇳🇬 brand. Dm to order. Only payment validates the order. Nationwide shipping is available."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dermile.com" />
        <meta property="og:title" content="Dermile — Your Skin At It's Best" />
        <meta
          property="og:description"
          content="Beauty, cosmetic & personal care. Your skin at its best! Nigerian 🇳🇬 brand. Dm to order. Only payment validates the order. Nationwide shipping is available."
        />
        <meta property="og:image" content="/images/logos/color-logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dermile.com" />
        <meta
          property="twitter:title"
          content="Dermile — Your Skin At It's Best"
        />
        <meta
          property="twitter:description"
          content="Beauty, cosmetic & personal care. Your skin at its best! Nigerian 🇳🇬 brand. Dm to order. Only payment validates the order. Nationwide shipping is available."
        />
        <meta property="twitter:image" content="/images/logos/color-logo.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="header">
        <div className="wrap">
          <div
            className={`toggle-menu ${toggle ? 'switch' : ''}`}
            onClick={() => {
              settoggle(!toggle);
              setActive(false);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="ul-nav sm-no">
            <Link href="/shop">
              <a className="mr"> Shop</a>
            </Link>
            <Link href="/reviews">
              <a>Reviews</a>
            </Link>
          </div>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                className="logo"
                alt="logo"
                width={148}
                height={76}
              />
            </a>
          </Link>
          <div className="ul-nav ul-nav1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setsearch(!search);
              }}
            >
              <Image src="/images/search.png" width={20} height={20} />
            </a>
            <Link href="/account/auth">
              <a className="sm-no">
                <Image src="/images/user.png" width={20} height={20} />
              </a>
            </Link>
            <Link href="/shop">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setopencart(true);
                }}
              >
                <Image src="/images/bag.png" width={20} height={20} />
                <span id="cartCount">{count}</span>
              </a>
            </Link>
            <a
              onClick={(e) => {
                e.preventDefault();
                setActive(!active);
              }}
              href="#"
              id="drop"
              className="sm-no"
            >
              {currency}
              <Image src="/images/arrow-down.png" width={20} height={20} />
            </a>
          </div>
          <ul id="dropDown" className={active ? 'active' : ''}>
            <li
              onClick={() => {
                setcurrency('NGN');
                setActive(false);
              }}
            >
              NGN
            </li>
            <li className="br"></li>
            <li
              onClick={() => {
                setcurrency('USD');
                setActive(false);
              }}
            >
              CAD
            </li>
          </ul>
        </div>
      </div>
      <CartDrawer />
      <div className={`search-wrap ${search ? 'active' : ''}`}>
        <div className="m-input-wrap">
          <input
            className="m-input"
            placeholder="Search for items"
            autoComplete="false"
          />
          <button className="m-btn">
            <Image src="/images/search.png" width={20} height={20}></Image>
          </button>
        </div>
      </div>
      <div className={`side-nav ${toggle ? 'active' : ''}`}>
        <Link href="/shop">Shop</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/account">My Account</Link>
        <a
          onClick={(e) => {
            e.preventDefault();
            setActive(!active);
          }}
          href="#"
          id="drop"
          className="sm-no"
        >
          {currency}
          <Image src="/images/arrow-down.png" width={20} height={20} />
        </a>
      </div>
    </>
  );
}

export default Header;
