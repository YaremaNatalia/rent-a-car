import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  height: 56px;
  padding: 4px 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    height: 64px;
    padding: 8px 0;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 6px 0;
  }
`;
export const HeaderWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;


export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.primeryBlue};
  text-decoration: none;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: all 0.3s;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondaryBlue};
    transform: scale(1.1);
  }
  .header-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;
