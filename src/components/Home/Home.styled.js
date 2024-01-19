import styled from 'styled-components';
import bgImg from '../../img/BgHomePage-desk2.png';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 850px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 370px;
    font-size: 30px;
    line-height: 1.17;
  }
  @media screen and (min-width: 1440px) {
    font-size: 35px;
  }
`;

export const Titlelist = styled.h6`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.17;
  }
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

export const BGImgHome = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(${bgImg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media screen and (min-width: 769px) {
    background-image: url(${bgImg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;
