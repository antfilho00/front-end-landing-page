import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
  `}
`;
