import React from "react"
import List from "./List"

function ShoppingCart(props) {
    
    return (
       <List item={props.item} handleClick={props.handleClick}/>
   )
}

export default ShoppingCart