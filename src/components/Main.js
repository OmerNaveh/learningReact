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
        this.setState((prevState)=>prevState.basket.push(e.target.textContent))
    }
    render(){
        return(
            <>
            <Header name='omer' />
            <section className = 'container'> 
            <Groceries onClickFunc = {this.updateItem}/>
            <Basket basket={this.state.basket}/>
            </section>
            <Footer />
            </>
        )
    }



}