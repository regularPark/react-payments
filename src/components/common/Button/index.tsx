import { BaseButton } from './style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'card';
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <BaseButton $variant={variant} {...props} />;
};

export default Button;
