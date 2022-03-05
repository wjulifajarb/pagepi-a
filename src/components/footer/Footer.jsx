import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="footer__copy">
        &#169; 2022 La Piña Electica. Todos los derechos reservados
      </p>
    </footer>
  );
};
