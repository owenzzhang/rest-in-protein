import { createContext, useEffect, useState } from "react";
import { client } from "../Lib/client";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    try {
      async function getClientData() {
        const query = `*[_type == "product"]`;

        const clientData = await client.fetch(query);
        setProducts(clientData);
        console.log(clientData);
      }
      getClientData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
