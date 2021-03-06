import React from "react";
import LandingPage from "./pages/landing page/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AudioBook from "./pages/main/components/audio-book/AudioBook";
import { ToastContainer } from "material-react-toastify";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import MainPage from "./pages/main/components/main-page/MainPage";
import SubscriptionTypes from "./pages/main/components/subscription-types/SubscriptionTypes";
import BookDetail from "./pages/main/components/book-detail/BookDetail";
import { LayoutProvider } from "./context/LayoutContext";
import { ProductProvider } from "./context/ProductContext";
import MyLibrary from "./pages/main/components/my-library/MyLibrary";
import IncreaseCredit from "./pages/main/components/increase-credit/IncreaseCredit";
import UserInfo from "./pages/user-information/UserInfo";

const isLogin = () => !!localStorage.getItem("token");

//Pub-Pri Component

const PublicRoute = ({ component, ...props }) => {
  // return (
  //   <Route
  //     {...props}
  //     render={(props) => {
  //       if (isLogin()) return <Redirect to="/" />;
  //       else {
  //         return React.createElement(component, props);
  //       }
  //     }}
  //   />
  // );
};
const PrivateRoute = ({ render, ...props }) => {
  // return (
  //   <Route
  //     {...props}
  //     render={(props) => {
  //       if (isLogin()) return render(props);
  //       else return <Redirect to={"/"} />;
  //     }}
  //   />
  // );
};

const App = () => {
  return (
    <>
      {/*<BrowserRouter>*/}
      {/*  <Switch>*/}
      {/*<PublicRoute path={"/"} component={LandingPage} />*/}
      {/*<PrivateRoute*/}
      {/*  path={"/"}*/}
      {/*  render={() => (*/}
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <LayoutProvider>
            <ProductProvider>
              <Layout>
                <Main>
                  <Route path={"/index"} component={MainPage} />
                  <Route path={"/AudioBook"} component={AudioBook} />
                  <Route path={"/BookDetail/:id"} component={BookDetail} />
                  <Route
                    path={"/SubscriptionTypes"}
                    component={SubscriptionTypes}
                  />
                  <Route path={"/IncreaseCredit"} component={IncreaseCredit} />
                  <Route path={"/MyLibrary"} component={MyLibrary} />
                </Main>
                <Route path={"/UserInfo"} component={UserInfo} />
              </Layout>
            </ProductProvider>
          </LayoutProvider>
        </Switch>
      </BrowserRouter>
      {/*      )}*/}
      {/*    />*/}
      {/*  </Switch>*/}
      {/*</BrowserRouter>*/}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
