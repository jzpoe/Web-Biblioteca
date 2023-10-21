import './Product.css'
import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Product = () => {
  const { data, cart, setCart } = useContext(dataContext);
  
  if (!data) {
    // Datos aún no disponibles, muestra un mensaje de carga
    return <p>Cargando datos...</p>;
  }

  if (data.length === 0) {
    // Datos disponibles pero no hay elementos para mostrar
    return <p>No se encontraron productos.</p>;
  }

const buyProduct =(product)=> {
console.log(product);
setCart([...cart,  product])
}
return data.map((product)=>{
  return (
    
      
        <div className="card" key={product._id}>
             <h3>{product.title}</h3>
          <h3>{product.precio}</h3>
          
           <img src={product.imageURL} alt="portada de libro" />
           
          <button className="button" onClick={()=>buyProduct(product)}>Encontrar</button>
        </div>
      )
    
   } );
}
  
export default Product;