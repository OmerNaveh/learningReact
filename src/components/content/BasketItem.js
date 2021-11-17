import { Component } from "react";
export default class BasketItem extends Component{
    constructor(props){
        super(props)
        this.state = {basket: this.props.basket}
    }
    processList = () => {
        try{
        const sorted = this.state.basket.sort()
        const res = []
            let counter = 1
            for (let i = 0; i < sorted.length; i++) {
                if (sorted[i] === sorted[i+1]){
                    counter++
                } else {
                    res.push({item: sorted[i], counter})
                    counter =1;
                }
            }
            return res
        }
        catch{
            return [];
        }
    }
    
    render(){
        const listItems = this.processList().map((item,index) => <li className='basketItem' key={index}>{item.counter}  {item.item}</li>);
        return(
            <>
            {listItems}
            </>
        )
    }
}