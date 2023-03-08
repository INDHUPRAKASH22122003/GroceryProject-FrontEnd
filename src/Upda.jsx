import React,{Component} from 'react';
import './Upda.css'
import axios from 'axios';

class Update extends Component{

    constructor(props){
        super(props);
        this.state={
            sno:'',
            itemName:'',
            category:'',
            quantity:'',
            price:''
        };
    }

    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handleItemNameChange=(event)=>{
        this.setState({itemName:event.target.value})
    };
    handleCategoryChange=(event)=>{
        this.setState({category:event.target.value})
    };
    handleQuantityChange=(event)=>{
        this.setState({quantity:event.target.value})
    };
    handlePriceChange=(event)=>{
        this.setState({price:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            itemName: this.state.itemName,
            category: this.state.category,
            quantity: this.state.quantity,
            price: this.state.price,
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }
    render(){
        return ( 
            <body>
                <div class="image">
            <img src="https://www.powerreviews.com/wp-content/uploads/2021/03/GROCERY-SURVEY.png" width="750px" height="700px" alt="up"/>
            </div>
            <div className='container'>
            <form onSubmit={this.handleSubmit}>
                <h1>UPDATE PAGE</h1>
                
                <div className='row'>
                    <label>SerialNo: </label><br></br>
                    <input type="number" id='sno' placeholder='  Enter your SerialNo...' value={this.state.sno}
                        onChange={this.handleSnoChange}/>
                </div>
                <div className='row'>
                    <label>ItemName : </label><br></br>
                    <input type="text" id='itemName' placeholder='  Enter your ItemName...' value={this.state.itemName}
                        onChange={this.handleItemNameChange}/>
                </div>
                <div className='row'>
                    <label>Category : </label><br></br>
                    <input type="text" id='category' placeholder='  Enter your Category...' value={this.state.category}
                        onChange={this.handleCategoryChange}/>
                </div>
    
                <div className='row'>
                    <label>Quantity : </label><br></br>
                    <input type="number" id='quantity' placeholder='  Enter your Quantity...' value={this.state.quantity}
                        onChange={this.handleQuantityChange}/>
                </div>
    
                <div className='row'>
                    <label>Price : </label><br></br>
                    <input type="number" id='price' placeholder='  Enter the Price...' value={this.state.price}
                        onChange={this.handlePriceChange}/>
                </div>
    
                <div className='row'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
            </div>
            </body>
         );
    }
}

export default Update