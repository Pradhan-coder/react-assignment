import React, { useState } from 'react';
import './Friends.css';
import fakeData from '../../fakeData/index';
import Friendinfo from '../Friendinfo/Friendinfo';
import Cart from '../Cart/Cart';

const Friends = () => {
const first15 = fakeData.slice(0,15); 
const [friends, setFriends] = useState(first15);
const [cart, setCart] = useState([]);

const payNowBtn= (friend) => {
const newCart = [...cart, friend];
setCart(newCart);   
    
}
    
    return (
        <div className="friends-container">
            <div className="friend-container">
                {
                    friends.map(friend => <Friendinfo 
                       payNowBtn = {payNowBtn}
                        friend={friend}
                        > 
                        </Friendinfo>)
                }
              </div>

            <div className="friends-cart">
                <Cart cart = {cart}></Cart>

            </div>
        </div>
    );
};

export default Friends; 