import React from "react";
import next from "../../Assets/icon-next.svg";
import prev from "../../Assets/icon-previous.svg";

function Slider(props) {
  const [mainImg, setMainImg] = React.useState();
  const [modal, setModal] = React.useState(false);
  const [count, setConut] = React.useState(0);
  const setImg = (data) => {
    setMainImg(data);
  };

  const nexBtn = () => {
    setConut((old) => old + 1);
    console.log(count);
    if (count > props?.product.imgs.length - 1) {
      setConut(0);
    }
    setImg(props.product.imgs[count]);
  };
  const pervBtn = () => {
    setConut((prev) => prev - 1);
    console.log(count);
    if (count <= 0) {
      setConut(props.product.imgs.length + 1);
    }
    setImg(props.product.imgs[count]);
  };

  return (
    <div className={modal ? "slider modal-active" : "slider"}>
      <div className="slider__main">
        <img src={mainImg ?? props.product?.imgs[0]} alt={mainImg} />
        <div className="slider__main__actions">
          <div className="slider__main__actions__left" onClick={nexBtn}>
            <img src={next} alt="next" />
          </div>
          <div className="slider__main__actions__right">
            <img src={prev} alt=" prev" onClick={pervBtn} />
          </div>
        </div>
      </div>
      <div className="slider__actions">
        {props.product?.imgs?.map((item, i) => (
          <div className="slider__actions__item" key={i}>
            <img src={item} alt={item} onClick={() => setImg(item)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
