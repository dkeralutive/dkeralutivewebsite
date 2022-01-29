import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
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
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Dermile — Your Skin At It's Best" />
        <meta
          property="og:description"
          content="Beauty, cosmetic & personal care. Your skin at its best! Nigerian 🇳🇬 brand. Dm to order. Only payment validates the order. Nationwide shipping is available."
        />
        <meta property="og:image" content="/images/logos/color-logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dermile.com/" />
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
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/logos/black-no-background.svg"
          alt="Vercel Logo"
          width={512}
          height={260}
        />

        <h1 className={styles.title}>our web shop is lunching soon...</h1>

        <p className={styles.description}>
          <code className={styles.code}>Beauty, cosmetic & personal care</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build with 🥑 by{`  `}
          <b style={{ paddingLeft: `8px` }}>Boldsofts Digital</b>
        </a>
      </footer>
    </div>
  );
}
