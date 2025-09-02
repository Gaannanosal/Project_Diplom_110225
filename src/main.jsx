import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import App from "./App";
import { Provider } from 'react-redux'
import store from './store/index.js'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);