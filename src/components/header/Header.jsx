import React, {useContext, useState} from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
//import logo from "../../images/gif-maker.gif";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () =>{
    setMenu(!menu)
  }
  
  const styleMenu = {
    left: menu ? 0 : "-100%"
  }
  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <div className={styles.toogle} onClick={toggleMenu}>
          <BiGridAlt size="25px" />
        </div>
        <nav className={styles.menu} style={styleMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about">Nosotros</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cartIcon}>
          <span className={styles.quantityProducts}>{cart.length}</span>
          <Link to="/cart">
            <BiShoppingBag size="25px" />
          </Link>
        </div>
      </header>
    </div>
  );
};
