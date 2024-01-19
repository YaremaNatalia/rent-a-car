import { HeaderStyled, HeaderWrap, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrap>
        <StyledNavLink to="/">
          <span className="header-text">Home</span>
        </StyledNavLink>
        <StyledNavLink to="/catalog">
          <span className="header-text">Catalog</span>
        </StyledNavLink>
        <StyledNavLink to="/favorites">
          <span className="header-text">Favorites</span>
        </StyledNavLink>
      </HeaderWrap>
    </HeaderStyled>
  );
};
