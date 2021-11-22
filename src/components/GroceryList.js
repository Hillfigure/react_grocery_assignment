import React from "react"
import List from "./List"

function GroceryList(props) {
  
    
     return (
            <List item={props.item} handleClick={props.handleClick}/>
    )
}

export default GroceryList