// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import store from '../redux/store';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-myfont'>
      <AuthProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
