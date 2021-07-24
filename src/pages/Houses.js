import React from 'react';
import './Products.css'
import {houses} from './HousesItem.js';



function Houses() {
  return (
        
    <div className="CategorySection4">
    <title>Hous Page</title>
      <div className="GridContainer ">
      {houses.map(houses => {
          return (
        <ul>
         <li> 
         <div className="BlogCard" key={houses.id}>
         <div className="cateMore"><img className="img-fluid" src={houses.image} alt={`Preview of ${houses.title}`} ></img></div>
           <h4>{ houses.title }</h4>
           <h5>{ houses.description }</h5>
           <div className="rateFooter">${ houses.price }</div>
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

export default Houses;
