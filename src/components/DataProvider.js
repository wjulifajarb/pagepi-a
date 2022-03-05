import React, { createContext, useEffect, useState } from "react";

import societyshirtred from "../images/CATEGORIAILUSTRADA/societyshirt/societyshirtred.png";
import societyshirtblack from "../images/CATEGORIAILUSTRADA/societyshirt/societyshirtblack.png";
import societyshirtblue from "../images/CATEGORIAILUSTRADA/societyshirt/societyshirtblue.png";
import societyshirtwhite from "../images/CATEGORIAILUSTRADA/societyshirt/societyshirtwhite.png";
import societyshirtyellow from "../images/CATEGORIAILUSTRADA/societyshirt/societyshirtyellow.png";


import happyFaceNegra from "../images/happyFaceNegra.png";
import sexyPeachNegra from "../images/sexyPeachNegra.png";
import sourFlavorJuiceNegra from "../images/sourFlavorJuiceNegra.png";
import idiotLoveBlanca from "../images/idiotLoveBlanca.png";
import moneyFirstBlanca from "../images/moneyFirstBlanca.png";
import goatBrandBlanca from "../images/goatBrandBlanca.png";
import cactusJackMaskCafe from "../images/cactusJackMaskCafe.png";
import sourFlavorJuiceCafe from "../images/sourFlavorJuiceCafe.png";
import rainOfVibesRoja from "../images/rainOfVibesRoja.png";
import tvNoSignalAzul from "../images/tvNoSignalAzul.png";
import cityComptonAzul from "../images/cityComptonAzul.png";
import happyFaceAzul from "../images/happyFaceAzul.png";

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setproducts] = useState([
    {
      id: 1.1,
      name: "Society Shirt Red",
      price: 35000,
      color: "Red",
      image: societyshirtred,
      brand: "La Piña Electrica",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
      count: 1
    },
    {
      id: 1.2,
      name: "Society Shirt Black",
      price: 35000,
      color: "Negra",
      image: societyshirtblack,
      brand: "La Piña Electrica",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
      count: 1
    },
    {
      id: 1.3,
      name: "Society Shirt Blue",
      price: 35000,
      color: "Azul",
      image: societyshirtblue,
      brand: "La Piña Electrica",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
      count: 1
    },
    {
      id: 1.4,
      name: "Society Shirt White",
      price: 35000,
      color: "Blanco",
      image: societyshirtwhite,
      brand: "La Piña Electrica",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
      count: 1
    },
    {
      id: 1.5,
      name: "Society Shirt Yellow",
      price: 35000,
      color: "Amarillo",
      image: societyshirtyellow,
      brand: "La Piña Electrica",
      description: [
        "Gorra Bordada",
        "100% Algodón Lavado",
        "Ajustador de gorra visera",
        "Cierre de hebilla de metal",
        "Pico Pre-Curvado",
      ],
      count: 1
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("the product has been added to cart");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if(dataCart){
      setCart(dataCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart])

  const value = {
    products: [products, setproducts],
    cart: [cart, setCart],
    addCart: addCart
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

