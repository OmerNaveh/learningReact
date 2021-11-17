import { Component } from "react";
import BasketItem from "./BasketItem";
export default class Basket extends Component{
    constructor(props){
        super(props)
        this.state = {basket:this.props.basket}
    }
    render(){
        return(
            <div className='basketList'>
            <h4>Basket</h4>
            <ul>
            <BasketItem basket= {this.state.basket}/>
            </ul>
            </div>
        )
    }
}