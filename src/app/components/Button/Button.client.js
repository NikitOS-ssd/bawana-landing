'use client'

import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, size, children, url }) => {
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

  const handleClick = (event) => {
    if (url) {
      window.open(url, '_blank');
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${getSizeClass(size)}`}
    >
      {children}
    </button>
  );
};

export default Button;
