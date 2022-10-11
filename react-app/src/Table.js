import React from "react";
import Tr from "./Tr";

function Table(props) {
  let { data } = props;
  
    return (
      <table>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            
            </tr>
        </thead>
        <tbody>
         { data.map((ele,i)=> <Tr key={i} item={ele}/>)} 
           
          </tbody>
      </table>
    );
  }


export default Table;
