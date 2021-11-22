import React, { Component } from "react"
import GroceryList from "./components/GroceryList"
import InputField from "./components/InputField"
import ShoppingCart from "./components/ShoppingCart"

class Container extends Component {

    constructor(){
        super()
        this.state = {
            groceryItems : [
                { id: 1, title: "Bananas", count: 0 },
                { id: 2, title: "Cheese", count: 0 },
                { id: 3, title: "Milk", count: 0 },
                { id: 4, title: "Chips", count: 0 },
                { id: 5, title: "Bread", count: 0 },
            ],
            shoppingListItems : []
        }         
        this.handleClick = this.handleClick.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleClick(event){
            this.setState(prevState => {
                const eventTargetId = parseInt(event.target.id)
                const updatedShoppingList = [...prevState.shoppingListItems]
                console.log(updatedShoppingList)
                for(let value of updatedShoppingList) {
                    if(eventTargetId === value.id) {
                        value.count = value.count +10
                        console.log(value.count)
                        return
                    }
                }
                updatedShoppingList.push({ id: eventTargetId, title: event.target.title, count: 0})
                return {...prevState, shoppingListItems: updatedShoppingList }
    })
}

    emptyCart() {
        this.setState({
            shoppingListItems: []
        })
    }

    addItem(event) {
        console.log("working")
        this.setState(prevState => {
            const updatedGroceryList = [...prevState.groceryItems]         
            updatedGroceryList.push({ title: event.target.title });
            return {...prevState, groceryItems: updatedGroceryList }
        })
    }

    render() {
        return(
            <div className="container">
                <ul>
                    <InputField addItem={this.addItem}/>
                    {this.state.groceryItems.map(item => <GroceryList key={item.id} item={item} handleClick={this.handleClick}/>)}
                </ul>
                <ul>
                    <button value="submit" onClick={this.emptyCart}>Delete All Items</button>
                    {this.state.shoppingListItems.map(item => <ShoppingCart key={item.id} item={item}/>)}
                </ul>
            </div>
        )
    }
}

export default Container