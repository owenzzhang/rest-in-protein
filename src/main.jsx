import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./Context/CartContext.jsx";
import ProductProvider from "./Context/ProductContext.jsx";
import { Provider } from "react-redux";
import store from "./slices/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <CartProvider>
          <Toaster />
          <App />
        </CartProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);
