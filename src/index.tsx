import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Provider } from "react-redux";

import { Home } from "./views/Home/Home";
import { Login } from "./views/Login";
import { store } from "./redux/Store";

import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
    (
        <BrowserRouter>
          <Provider store={store}>
            <Fabric>
              <ScrollToTop />
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Fabric>
          </Provider>
        </BrowserRouter>
    ),
    document.getElementById("content")
);