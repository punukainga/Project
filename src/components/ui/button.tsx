/**
 * This is the Button component for the application
 * it accepts various props to customize its behaviour and appearance
 */
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'link';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'link',
  size = 'medium',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant} ${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
