"use strict";
import "./homeOrderList.sass";
import { HomeOrderListItem } from './homeOrderListItem.js';
import React from "react";
import { Link } from "react-router-dom";



export class HomeOrderList extends React.Component {
    render() {

        const orders = this.props.list;
        const items = orders.map((order, index) => (<li key={index}><HomeOrderListItem order={order} deleteOrderCallback={this.props.deleteOrderCallback}/> </li>));
       
        let totalNumberOrders=0;
        orders.forEach(order => {
            totalNumberOrders = totalNumberOrders + order.numFood
        });
     
        let mysteryBlock = (<div></div>);
        if(totalNumberOrders >= 10){
            mysteryBlock = (<Link to="/quit">Too many orders. I quit!</Link>);
        }


        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <div>
                    
                     <span id="orderid"> Order ID </span>
                     <span id="name"> Name </span>
                     <span id="food"> Food </span>
                     <span id="quantity"> Quantity </span>
                    
                </div>

                <div>
                    <ul>
                        {items}
                    </ul>
                </div>

                <div>
                    {mysteryBlock}
                </div> 


            </section>
        );
    }
}
