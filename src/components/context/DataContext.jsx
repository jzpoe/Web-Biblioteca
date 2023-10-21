
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider =  ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [carrito, setCarrito] = useState("")

    

    useEffect(()  => {
         axios.get('http://localhost:3002/obtener').then((response) => setData(response.data));
        
       
    }, []);
    
    return (
        <dataContext.Provider value={{data, cart, setCart, carrito, setCarrito}}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;
