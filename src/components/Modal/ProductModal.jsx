import React from "react";
import Slider from "../Slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../redux/thunk/ProductThunk";

function ProductModal(props) {
  const product = useSelector((s) => s.product.selectedProduct);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return <div className="product-modal"></div>;
}

export default ProductModal;
