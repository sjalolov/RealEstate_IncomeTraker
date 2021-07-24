import React from 'react';
import './Products.css'
import {stores} from './StoresItem.js';

function Stores() {
  return (
        
    <div className="CategorySection4">
    <title>Hous Page</title>
      <div className="GridContainer ">
      {stores.map(stores => {
          return (
        <ul>
         <li> 
         <div className="BlogCard" key={stores.id}>
         <div className="cateMore"><img className="img-fluid" src={stores.image} alt={`Preview of ${stores.title}`} ></img></div>
           <h4>{ stores.title }</h4>
           <h5>{ stores.description }</h5>
           <div className="rateFooter">${ stores.price }</div>
           <p><button >Add to Cart </button></p>
           </div>
         </li>
        </ul>
          );
        })}
      </div>
    </div>
  );
}


export default Stores;
