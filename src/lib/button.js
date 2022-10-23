import React from 'react';
import styles from './button.module.css';

export function Button({className,name,label,type,onClick,value,loading,focus,disabled}) {
  return (
  <span onClick={onClick}>
   <button 
   className={`${className ? className : styles.default} ${focus ? styles.focus : ""}`}
   name={name}
   type={type}
   value={value}
   loading={loading}
   disabled={disabled === true}
   >
      {loading ? <div className={styles.loader}></div> : label || "Button"}
   </button>
   </span>
  );
}
export default Button;
