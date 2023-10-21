import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Si estás utilizando React Router

import Home from "./components/home/Home";
import Cardcontent from "./components/carContent/Cardcontent.JSX";
import DataProvider from "./components/context/DataContext";
import CartTotal from "./components/carContent/CartTotal";

function App() {
  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cardcontent" element={<Cardcontent/>}/>
          <Route path="/cart" component={CartTotal} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
