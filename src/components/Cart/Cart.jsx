import React from "react";
import CartItem from "../CartItem/CartItem";
import sneakers from "../../Assets/image-product-1.jpg";


function Cart(props) {
  
  

  return (
    <div className="cart-list">
      <h3 className="cart-list__header">Cart</h3>
      <div className="cart-list__body">
        {props?.cart.count < 1 ? (
          <p className="empty-cart">Your cart is Empty</p>
        ) : (
          props.cart.data.map((product) => {
            return (
              <CartItem
                key={product.id}
                title={product.title}
                price={product.price}
                quantity={product.count}
                result={product.count * product.price}
                img={sneakers}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cart;
