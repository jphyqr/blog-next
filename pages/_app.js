import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initializeStore } from '../config/store';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    //Preload from the server side
   
    return {
      pageProps: {
        ...(Component.getInitialProps ? await 
          Component.getInitialProps(ctx) : {})
      }
    }
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}
export default withRedux(initializeStore)(MyApp);