import "./CartContent.css";
import { useContext } from "react"
import { dataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom";


const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, elemento) => acc + elemento.precio, 0);

  const navigation = useNavigate(); 
  const volver = () => {
    navigation('/')
    
  };

  return (
    <div className="cartTotal">
      <button onClick={volver} className="volver">Volver</button>
      <h3 className="total-text">Total a pagar: {total} $</h3>
    </div>
  );
}

export default CartTotal;
