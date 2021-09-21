import styled, { css } from 'styled-components';

export const Paragraph = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
  `}
`;
