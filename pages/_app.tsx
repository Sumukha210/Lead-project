import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import NavBar from "../components/common/Navbar";
import "../css/global.css";
import { store } from "../Redux/store";
import SEO from "../components/SEO";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
