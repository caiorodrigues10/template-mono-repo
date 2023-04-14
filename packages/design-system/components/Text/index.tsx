import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-family: sans-serif;
`;

interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
}

const Text: FC<TextProps> = ({ tag, children, ...props }) => {
  return <StyledText as={tag}>{children}</StyledText>;
};

export { Text };
