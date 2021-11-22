import React from "react"

function ListItem(props) {
    return(
        <li 
            key={props.item.id}
            className="list-item"
            onClick={props.handleClick}
            title={props.item.title}
            id={props.item.id}
        >
            {props.item.title}
        </li>
    )
}

export default ListItem