
import  { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "./CartContent.css"; // Asegúrate de importar tus estilos CSS aquí

const Cart = () => {
  const { cart } = useContext(dataContext);

  return (
    
      <div className="cartContainer">
      
      <h2 className="carritoCompras">Tus Libros</h2>
      {cart.map((product) => (
        <div className="cartItem" key={product._id}>
          <img src={product.imageURL} alt="product cart" />
          <h3 className="letra">{product.title}</h3>
          <h3 className="letra">{product.precio}</h3>
          
        </div>
        
      ))}
    </div>
    
  );
};

export default Cart;
