import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return <Styled.Paragraph>{children}</Styled.Paragraph>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
