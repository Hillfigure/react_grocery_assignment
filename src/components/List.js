import React from "react"
import ListItem from "./ListItem"

function List(props) {
    return(
        <ListItem key={props.item.id} item={props.item} handleClick={props.handleClick}/>
    )
}

export default List