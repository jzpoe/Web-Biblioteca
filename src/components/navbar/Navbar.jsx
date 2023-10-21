
import  { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  const {cart} = useContext(dataContext)

  return (
    <div className='nav_container' >
<nav className='navbar'>
  <h1 className='navbar_logo'>logo</h1>
  <h2 className='carrito'>
  <Link to="/Cardcontent">🛒</Link>
  {cart.length > 0 && (
    <span className="cartCount">{cart.length}</span>
  )}
  
  </h2>
</nav>
    </div>
  )
}

export default Navbar
