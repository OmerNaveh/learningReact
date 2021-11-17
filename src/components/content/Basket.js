import { Component } from "react";
import BasketItem from "./BasketItem";
export default class Basket extends Component{
    render(){
        return(
            <div className='basketList'>
            <h4>Basket</h4>
            <img className='clearBasketImg' onClick={this.props.clearBasket} src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" alt="trash"/>
            <ul>
            <BasketItem basket= {this.props.basket}/>
            </ul>
            </div>
        )
    }
}