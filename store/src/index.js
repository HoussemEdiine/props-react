import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './ProductTable';
let product = [{name:'shirt'
,price : '20$', category:'clothes' 
},{name:'keyboard',price:'120$',category:'electronics'},
{name:'iphone',price:'900$',category:'electronics'}
]
let className= 'table' //style table from bootstrap
let head = 'thead-dark'
ReactDOM.render(
  
  <React.StrictMode>
    <ProductTable data={product} className={className} head={head}/>
  </React.StrictMode>,
  document.getElementById('root')
);
