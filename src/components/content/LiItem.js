import { Component } from "react";
export default class LiItem extends Component{
    constructor(props){
        super(props)
        this.state = {groceries: this.props.groceries}
    }
   
    render(){
        const listItems = this.state.groceries.map((item,index) => <li onClick={this.props.onClickFunc} className='liItem' key={index}><i className="far fa-plus-square svgs"></i> {item}</li>);
        return(
            <>
            {listItems}
            </>
        )
    }



}