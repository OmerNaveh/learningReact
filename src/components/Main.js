import { Component } from "react";

import Header from './header/Header'
import Footer from './footer/Footer';
import Groceries from './content/Groceries';
import Basket from './content/Basket';
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = { basket:[]};
    }
    updateItem=(e)=>{
        if(!e.target.textContent) return
        this.setState({ basket: [...this.state.basket, e.target.textContent] });
    }
    clearBasket = ()=>{
        this.setState({basket : []});
    }
    render(){
        return(
            <>
            <Header name='omer' />
            <section className = 'container'> 
            <Groceries onClickFunc = {this.updateItem}/>
            <Basket basket={this.state.basket} clearBasket={this.clearBasket}/>
            </section>
            <Footer />
            </>
        )
    }



}