import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.SectionContainer>{children}</Styled.SectionContainer>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
