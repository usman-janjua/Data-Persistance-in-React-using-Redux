import React, { Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import ProductListing from "./containers/ProductListing/ProductListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AddProduct = React.lazy(() =>
  import("./components/AddProduct/AddProduct")
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact component={ProductListing} path="/" />
          <Route
            exact
            path="/add-product"
            render={() => (
              <Suspense fallback={<div>Loading....</div>}>
                <AddProduct />
              </Suspense>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default connect(null, null)(App);
