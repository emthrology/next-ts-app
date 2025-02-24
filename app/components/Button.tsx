import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

// export default function Button({props} : {props: ButtonProps}) {
// const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled = false }) => {
export default function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg border border-black py-1 mt-1 text-white font-bold ${
        variant == 'primary'
          ? 'bg-blue-500'
          : variant == 'secondary'
            ? 'bg-black'
            : 'bg-red-500'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// export default Button;
