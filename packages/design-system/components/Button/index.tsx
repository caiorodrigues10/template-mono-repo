import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: sans-serif;
  padding: 0.5rem 1rem;
  background: #b857b8;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 0 0px #000;

  &:hover {
    background: #954195;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton>{children}</StyledButton>;
};

export { Button };
