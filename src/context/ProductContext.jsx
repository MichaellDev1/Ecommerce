import { createContext, useState } from "react";

const Context = createContext([
  {
    title: "..",
  },
]);

export function ProductContext({ children }) {
  const [cartProduct, setCart] = useState([]);
  return (
    <Context.Provider value={{ cartProduct, setCart }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
