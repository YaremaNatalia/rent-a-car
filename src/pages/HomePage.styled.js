import styled from 'styled-components';
import bgImg from '../img/BgHomePage-desk.jpg'


export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.17;
  }
`;

export const Titlelist = styled.h6`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;

export const ButtonRentCar = styled.button`
  background-color: ${props => props.theme.colors.primeryBlue};
  color: ${props => props.theme.colors.primeryWhite};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
  width: 100%;
  height: 36px;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    font-size: 18px;
    line-height: 1.3;
    padding: 10px 30px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const BGImgHomePage = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(${bgImg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 769px) {
    background-image: url(${bgImg});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }
`;
