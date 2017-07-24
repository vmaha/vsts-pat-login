import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Auth } from "./models/Auth";
import { Home } from "./views/Home";
import { Login } from "./views/Login";

import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
    (
        <BrowserRouter>
          <div>
            <ScrollToTop />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
    ),
    document.getElementById("content")
);