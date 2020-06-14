"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";
import { updateSavedOrders } from "../localStorage.js";
import API from "./../api.js";
import { LoadingPopup } from "./../loading/loading.js";


export default class HomePage extends React.Component {
    state = {
        orderList: [],
        showLoading: false
    }

    addOrderToList = (order) => {
        var updatedOrderList = this.state.orderList;
        updatedOrderList.push(order);
        this.setState({
            orderList: updatedOrderList,

        }); 
        updateSavedOrders(this.state.orderList)
    }

    deleteOrderFromList = (orderId) => {
        var updateList = this.state.orderList;
        for(let i=0; i<updateList.length; i++){
            if(updateList[i].id==(orderId)){
                updateList.splice(i,1);
            } 
        }
        this.setState({
            orderList: updateList,
        });
        updateSavedOrders(this.state.orderList)
    }
    componentDidMount() {
        API.fetchOrders().then(data => {
            // Implement this!
            if(data !== null){
                this.setState({
                    orderList : data
                });
            }
            // Be careful, the first time you call this, data might be null.
            // If data is null, don't change orderList.
        });
    }
    apiAddOrderToList = order => {
        // TODO: set showLoading to true
        this.setState({
            showLoading: true
        })
    
        API.addOrder() // Calls a fake network call that takes a few seconds
            .then(() => {
                // TODO: call `addOrderToList`
                this.addOrderToList(order);
            })
            .catch(() => {
                // TODO: alert user of failure
                window.alert("alert! function has failed");
            })
            .finally(() => {
                // TODO: set showLoading to false
                this.setState({
                    showLoading:false
                })
            });
    }

    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1> 
                <HomeOrderForm addOrderCallback={this.apiAddOrderToList}/>
                <HomeOrderList deleteOrderCallback={this.deleteOrderFromList} list={this.state.orderList} />
                <LoadingPopup show={this.state.showLoading}/>

            </div>
        );
    }
}
