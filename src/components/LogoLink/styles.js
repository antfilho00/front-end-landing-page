import styled, { css } from 'styled-components';

export const LogoLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    > img {
      height: 3rem;
    }
  `}
`;
