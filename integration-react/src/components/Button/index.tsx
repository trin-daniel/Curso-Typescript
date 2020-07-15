import React, { ButtonHTMLAttributes } from 'react';
import './style.css';
// Assim.
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }
// ou assim.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest} >
      {children}
    </button>
  );
}
export default Button;