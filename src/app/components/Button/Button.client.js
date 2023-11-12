import React from 'react';
import styles from './Button.module.css';

const Button = ({ handler, size, children }) => {
  const getSizeClass = (size) => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'middle':
        return styles.middle;
      case 'big':
        return styles.big;
      default:
        return '';
    }
  };

  return (
    <button
      onClick={handler}
      className={`${styles.button} ${getSizeClass(size)}`}
    >
      {children}
    </button>
  );
};

export default Button;
