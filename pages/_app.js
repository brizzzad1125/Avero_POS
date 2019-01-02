import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../state/with-redux-store";
import { Provider } from "react-redux";

import "../util/empty.css";
import Actions from "../state/actions";
import { getTables, getChecks, getMenuItems } from "../util/avero-api";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }

  componentDidMount() {
    getTables().then(tables => {
      this.props.reduxStore.dispatch(Actions.setTables(tables));
    });

    getChecks().then(checks => {
      this.props.reduxStore.dispatch(Actions.setChecks(checks));
    });

    getMenuItems().then(menuItems => {
      this.props.reduxStore.dispatch(Actions.setMenuItems(menuItems));
    });
  }
}

export default withReduxStore(MyApp);
