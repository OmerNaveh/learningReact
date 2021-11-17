import { Component } from "react";
import LiItem from "./LiItem";
const groceriesData = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green', 'Pepper', 'Eggs', 'Cheese', 'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

export default class Groceries extends Component{
    render(){
        return(
            <div className="groceriesList">
                <h4>Groceries</h4>
                <ul>
                <LiItem groceries= {groceriesData} onClickFunc = {this.props.onClickFunc}/>
                </ul>
            </div>
        )
    }
}



