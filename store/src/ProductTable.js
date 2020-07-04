import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
 
export default function ProductTable(props) {
  console.log(props.data)
  return (
<div className='App'>
<h1>
Product Table
</h1>
     <table className={props.className}>
       <thead className={props.head}>
       <tr>
         <th>Name</th>
         <th>Price</th>
         <th>Category</th>
       </tr>
       </thead>
    {props.data.map(item =>(
     <tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.category}</td>
     </tr> 
    )
    )}
     </table>
     </div>
  
  
  )
  
}
ProductTable.propTypes = {
  data : PropTypes.array,
  className:PropTypes.string,
  head:PropTypes.string
}

