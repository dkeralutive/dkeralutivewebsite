import { AppProps } from 'next/app';
import { AppProvider } from '@/context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/css/preset.css';
import '@/public/css/style.css';
import '@/public/css/all.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
