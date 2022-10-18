import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import AuthProvider from "~/Context/AuthProvider";
import LoginProvider from "./Context/LoginProvider";
import EmailPwProvider from "./Context/EmailPwProvider";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LoginProvider>
                    <AuthProvider>
                      <EmailPwProvider>
                        <Layout>
                          <Page />
                        </Layout>
                      </EmailPwProvider>
                    </AuthProvider>
                  </LoginProvider>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
