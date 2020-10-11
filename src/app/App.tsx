import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import { store } from "../redux/store/configureStore";
import AppRouter from "../router";

const GlobalAlertAntdStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.42em;
    color: #A7A1AE;
    background-color: #1F2739;
  }
`;

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <GlobalAlertAntdStyles />
    <AppRouter />
  </Provider>
);

export default App;
