import React from "react";
import cart from "../../Assets/icon-cart.svg";

function ProductInfo(props) {
  return (
    <div className="product__content">
      <div className="product__content__title">{props?.subTitle}</div>
      <div className="product__content__header">{props?.title}</div>
      <div className="product__content__description">{props?.description}</div>
      <div className="product__content__price">
        <div className="product__content__price__current">
          ${props.price % 2 === 0 ? props.price + ".00" : props.price}
          <span className="product__content__price__current__discount">
            {props?.discount}%
          </span>
        </div>
        <div className="product__content__price__old">
          $
          {props?.oldPrice % 2 === 0
            ? props?.oldPrice + ".00"
            : props?.oldPrice}
        </div>
      </div>
      <div className="product__content__actions">
        <div className="product__content__actions__left">
          <button
            onClick={props?.increment}
            className=" btn product__content__actions__left__button"
          >
            +
          </button>
          <div className="product__content__actions__left__counter">
            {props.count ?? 0}
          </div>
          <button
            onClick={props?.decrement}
            className=" btn product__content__actions__left__button"
          >
            -
          </button>
        </div>
        <div className="product__content__actions__right">
          <button
            className="product__content__actions__right__button btn"
            onClick={() => {
              props.addProductToCart(props.product);
            }}
          >
            <img src={cart} alt="cart" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
