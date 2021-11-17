import { Component } from "react";
export default class BasketItem extends Component{
    processList = () => {
        try{
        const sorted = this.props.basket.sort()
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
        const listItems = this.processList().map((item,index) => <li onClick={
            (e)=>{
              e.target.classList.toggle('putline')  
            }
        } className='basketItem' key={index}><i class="far fa-minus-square svgMin"></i> {item.counter}  {item.item}</li>);
        return(
            <>
            {listItems}
            </>
        )
    }
}