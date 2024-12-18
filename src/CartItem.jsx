import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;
    console.log(cart);
    cart.map(item => {
        console.log (parseInt(item.cost.substring(1)) + " X " + item.quantity);
        totalCost += parseInt(item.cost.substring(1)) * item.quantity;
        console.log (parseInt(item.cost.substring(1)) * item.quantity);
        console.log ("Total Cost: " + totalCost);
    });
    
    return totalCost;
    }
    const handleContinueShopping = (e) => {
        return onContinueShopping(e);
    };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  const handleIncrement = (item) => {
    console.log (item.quantity);
    let quantity = item.quantity;
    console.log (quantity);
    quantity++;
    const name = item.name;
    console.log ("updated quantity for " + name + ":" + quantity);
    dispatch (updateQuantity({name , quantity}));
    return;
  };

  const handleDecrement = (item) => {
    let quantity = item.quantity;    
    const name = item.name;
    if (quantity == 1){
        console.log("remove "+name);
        dispatch(removeItem(name));
    }
    else {
    quantity--;
    console.log ("updated quantity for " + name + ":" + quantity);
    dispatch (updateQuantity({name , quantity}));}
    return;
  };

  const handleRemove = (item) => {
    const name = item.name;
    console.log("remove "+name);
    dispatch(removeItem(name));
    return;
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return parseInt(item.cost.substring(1)) * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


