import React from 'react';
import CartItems from './CartItems';

function CartList({value}) {
  const {cart} = value;

  return (
    <div className='container-fluid'>
      {cart.map(item => {
        return <CartItems key={item.id} item={item} value={value}/> 
      })}
      
    </div>
  )
}

export default CartList
