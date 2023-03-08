import axios from "axios";
import React  from "react";
import { useState } from "react";
import './Del.css'
function Del() {
  const [search,setSearch]=useState("");
  const searchBook=(evt)=>{
          axios.delete('http://127.0.0.1:8080/delete/'+search)
          .then( alert("Deleted S.No: "+search))
          .catch(err=>console.log(err))
  }
return (
  <>
          <div>
              <center>
                <h2>Delete Record</h2>
              <div className="dels">
                <h4>Enter the SerialNo to be deleted:-</h4>
                  <input type="number" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}/><br/><br/>
                      <button onClick={searchBook}>Enter</button>
              </div>  
                </center>
          </div>
    </>
);
}

export default Del;