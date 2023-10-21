import CartElement from "./CartElement"
import CartTotal from "./CartTotal"

import { useContext } from "react"
import { dataContext } from "../context/DataContext"



const Cardcontent = () => {
  const {cart}= useContext(dataContext)

  return  (
    <>
      <CartElement/>
      <CartTotal/>
      
    </>
  )
  
}

export default Cardcontent
