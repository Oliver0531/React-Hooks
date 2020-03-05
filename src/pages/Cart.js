import React, { useContext, Fragment } from 'react';
import ShopContext from '../context/shopContext';

const CartPage = () => {
  const context_c = useContext(ShopContext);

  const totalPrice = context_c.cart.reduce((total, curItem) => {
    return total + curItem.price * curItem.quantity;
  },0);

  return (
    <Fragment>
      <main className={`cart ${context_c.tabName==='cart' ? '' : 'disabled'}`}>
        {context_c.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context_c.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context_c.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className='totalPrice'>Total : {totalPrice}</div>
      </main>
    </Fragment>
  );
};
export default CartPage;
