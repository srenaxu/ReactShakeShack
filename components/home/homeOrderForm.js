"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        orderCounter: 0,
        name: "",
        item: "",
        quantity: 0
    }
    onClickAddButton = () => {
        this.state.orderCounter = this.state.orderCounter + 1;
        this.setState({
            orderCounter: this.state.orderCounter
        });
        const order= {
            id: this.state.orderCounter,
            food: this.state.item,
            numFood: this.state.quantity,
            name: this.state.name

        }
        this.props.addOrderCallback(order)
        
        console.log("new order added!");
        console.log("Order Counter: "+this.state.orderCounter);
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.item);
        console.log("Quantity: " + this.state.quantity);
    }
    onChangeSelect = (e) => {
        const value = e.target.value;
        this.setState({
            item: value
        })
        
    }
    onChangeQuantity = (e) => {
        const value = parseInt(e.target.value);
        this.setState({
            quantity: value
        })
        
    }
    onChangeName = (e) => {
        const value = e.target.value;
        this.setState({
            name: value
        })
        
    }
    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <select onChange={(e) => this.onChangeSelect(e)}>
                    <option value="burgers">Burgers</option>
                    <option value="fries">Fries</option>
                    <option value="shakes">Shake</option>
                </select>
                <span> Quantity: </span>
                <input type="number" placeholder="0"
                    onChange={(e) => this.onChangeQuantity(e)}/>
                <span> Your Name: </span>
                <input type="text" placeholder="i.e Serena"
                    onChange={(e) => this.onChangeName(e)}/>
                <button onClick={this.onClickAddButton}>Add to Orders</button>
                <br></br>

            </section>
        );
    }
}
