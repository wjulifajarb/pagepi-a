import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataProvider";
import { BiTrash } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Cart.module.css";

export const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  if (cart.length === 0) {
    return <h2 className={styles.containerCart}> Carrito vacio</h2>;
  }

  const whatsapp = () => {
    let string = ["Hola Piña, Mi pedido es: "];
    cart.forEach((element) => {
      const { name, count } = element;
      string.push(`Gorra: ${name} Cantidad: ${count}`);
    });
    let key = string.join(" - ");
    let url = key.replace(/\s+/g, "%20");
    window.open(`https://wa.me/573222283039?text=${url}`);

    cart.splice(0, cart.length);
    setCart([...cart]);
  };

  return (
    <section className={styles.containerCart}>
      <h2 className={styles.titleCart}>Carrito de compras</h2>
      {cart.map((product) => (
        <div className={styles.details} key={product.id}>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className={styles.description}>
            <h2 className={styles.name}>{product.name}</h2>
            <h3 className={styles.price}>COP {product.price}</h3>
            <div className={styles.counterContainer}>
              <button
                className={styles.btnPlus}
                onClick={() => reduction(product.id)}
              >
                -
              </button>
              <span className={styles.quantity}>{product.count}</span>
              <button
                className={styles.btnLess}
                onClick={() => increase(product.id)}
              >
                +
              </button>
            </div>
          </div>

          <div
            className={styles.containerRemoveCart}
            onClick={() => removeProduct(product.id)}
          >
            <BiTrash color="tomato" size="25px" />
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <span>Total</span>
        <span>$ {total} COP</span>
      </div>
      <div className={styles.containerBtnOrder}>
        <button className={styles.btnOrder} onClick={whatsapp}>
          Finalizar Pedido <FaWhatsapp fontSize="25px" />
        </button>
      </div>
    </section>
  );
};
