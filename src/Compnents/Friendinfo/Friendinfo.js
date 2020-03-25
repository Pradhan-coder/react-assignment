import React, { useState }from 'react';
import './Friendinfo.css';
import Friends from '../Friends/Friends';


const Friendinfo = (props) => {
    // console.log(props.friend);
    const {photo, name, designation, salary} = props.friend;
    
    
    return (
       
    <div className="friendinfo">
        <div>
              <div>
                 <img src={photo} alt=""/>
              </div>
            <div>
               <h4>{name}</h4> 
              <p>{designation}</p> 
              <p>Salary :{salary} US$</p>
              
               <button  onClick={() => props.payNowBtn(props.friend)} className="payNowBtn">Pay Now</button> 
            </div> 
      
       </div>
     </div>
    
    );
};

export default Friendinfo;
