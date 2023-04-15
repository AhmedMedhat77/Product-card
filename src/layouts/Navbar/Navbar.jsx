import React from "react";
import mobileMenu from "../../Assets/icon-menu.svg";
import closeMenu from "../../Assets/icon-close.svg";
import navCart from "../../Assets/icon-cart.svg";
import avatar from "../../Assets/image-avatar.png";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import Cart from "../../components/Cart/Cart";
import { useSelector } from "react-redux";

function Navbar(props) {
  const [navState, setNavState] = React.useState({
    menu: false,
    user: false,
    cart: false,
  });

  const toggleMenu = () => {
    setNavState((old) => {
      return { ...old, menu: !old.menu };
    });
  };

  const toggleCart = () => {
    setNavState((old) => {
      return { ...old, cart: !old.cart };
    });
  };

  const cart = useSelector((s) => s.product.cart);

  return (
    <>
      {navState.cart && <Cart cart={cart} />}
      {navState.menu && <div className="overlay" />}
      <nav className="navbar">
        <div
          className={
            navState.menu ? "navbar__mobile-menu active" : "navbar__mobile-menu"
          }
          onClick={toggleMenu}
        >
          <img src={navState.menu ? closeMenu : mobileMenu} alt="menu" />
        </div>
        <div className="navbar__logo">
          <Link to="/">
            <img src={Logo} alt="Mobile Shop" />
          </Link>
        </div>
        <ul className={navState.menu ? "navbar__menu" : "navbar__menu active"}>
          {props.ROUTES.map((route) => (
            <li className="navbar__menu__item" key={route.id}>
              <Link
                onClick={() =>
                  setNavState((old) => {
                    return { ...old, menu: false };
                  })
                }
                to={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__actions">
          <div className="navbar__actions__item ">
            <div className="cart">{cart.count}</div>
            <img src={navCart} alt="cart" onClick={toggleCart} />
          </div>
          <div className="navbar__actions__item avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
