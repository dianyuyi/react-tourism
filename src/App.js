import React, { Suspense } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ResetStyle, GlobalStyle } from "./styles/common/globalStyle";
import { Home, ScenicSpot, About } from "./pages";
import { Navbar, Loading } from "./components";

const Layout = () => {
  const location = useLocation();

  function _ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <>
      {/* <Router> */}
      <ResetStyle />
      <GlobalStyle />
      <Navbar path={location.pathname} />
      {/* <SideNavbar /> */}
      <ScrollToTop />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/scenicSpot" component={ScenicSpot} />
          <Route path="/about" exact component={About} />
          {/* <Route path="*" component={Error} /> */}
        </Switch>
      </AnimatePresence>
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
};
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  );
}

export default App;
