import React from "react";
import Trash from "../../Assets/icon-delete.svg";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/ProductSlice";

function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={props?.img} alt={props?.title} />
      <div className="cart-item__info">
        <h6 className="cart-item__info__title">{props.title}</h6>
        <div className="cart-item__info__calc">
          <span>${props?.price}</span> <span>x </span>
          <span>{props?.quantity} </span>
          <span>{props?.result}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <img
          src={Trash}
          onClick={() => dispatch(productActions.deleteProduct())}
          alt="Delete"
        />
      </div>
    </div>
  );
}

export default CartItem;
