import P from 'prop-types';
import { MenuLink } from '../MenuLink/styles';
import * as Styled from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.NavLink>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.NavLink>
  );
};

NavLinks.propTypes = {
  children: P.node.isRequired,
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ).isRequired,
};
