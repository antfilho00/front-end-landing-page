import styled, { css } from 'styled-components';
import { Paragraph } from '../../components/TextComponent/styles';
import { SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${Paragraph} {
      font-size: ${theme.fonts.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
