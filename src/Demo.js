import React,{Component} from 'react';
import './Demo.css';

class Demo extends Component{

    constructor(props){
        super(props);
        this.state = {
            item : ['ITEM1','item2'],
            textContent:""
        };

    }
    textchange = (e)=>{
       this.setState({textContent:e.target.value}) ;
    }
    addItem = (e)=>{
        let currentText = this.state.textContent;
        let currentItem = this.state.item;
        currentItem.push(currentText);
        this.setState({item:currentItem})
    }
    removeItem = (i)=>{
        if(!window.confirm("are you sure you want to delete this.?")){
            return;
        }
        let currentItem = this.state.item;
        currentItem.splice(i,1);
        this.setState({item:currentItem});
    }

    render(){

        return(
            <div className="">
                <input type = "text" onChange =  {this.textchange} />
                <button onClick= {this.addItem}>add</button>
                <ul>
                    
                    {this.state.item.map((item,k)=>{
                        return(
                        <li>{item}{k}<button onClick={()=>{this.removeItem(k)}}>delete</button></li>
                        )
                    })}
                </ul>
                <p>{this.state.textContent}</p>
            </div>

        );
    }
}










export default Demo;