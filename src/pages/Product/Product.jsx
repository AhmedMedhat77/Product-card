import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux/slices/ProductSlice";
import { getProductsThunk } from "../../redux/thunk/ProductThunk";
import Slider from "../../components/Slider/Slider";
import ProductInfo from "../../components/productInfo/ProductInfo";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((s) => s.product.selectedProduct);
  React.useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const incrementProduct = () => {
    dispatch(
      productActions.setSelectedProduct({
        ...product,
        count: (product.count ?? 0) + 1,
      })
    );
  };
  const decrementProduct = () => {
    dispatch(
      productActions.setSelectedProduct({
        ...product,
        count: !product.count ? 0 : (product.count ?? 0) - 1,
      })
    );
  };

  const addProductToCart = (product) => {
    dispatch(productActions.addProductToCart(product));
  };

  return (
    <div className="product-page">
      <div className="product-sider">
        <Slider product={product} />
      </div>
      <div className="product-info">
        <ProductInfo
          increment={incrementProduct}
          decrement={decrementProduct}
          addProductToCart={addProductToCart}
          product={product}
          title={product?.title}
          subTitle={product?.subTitle}
          description={product?.description}
          price={product?.price}
          discount={product?.discount}
          oldPrice={product?.oldPrice}
          count={product?.count}
        />
      </div>
    </div>
  );
}

export default Home;
