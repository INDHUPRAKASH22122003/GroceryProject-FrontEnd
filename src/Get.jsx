import axios from "axios";
import React, { Component } from "react";
import './Get.css'
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div>
        <center>  
        <h3>DETAILS OF THE DATABASE</h3> 
      <table border={1}>
      <thead>
        <tr>
          <th>SerialNo</th>
          <th>ItemName</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.itemname}</td>
            <td>{user.category}</td>
            <td>{user.quantity}</td>
            <td>{user.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </center>
    </div>
    );
  }}
  
export default Get;