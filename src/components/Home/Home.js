import {
  BGImgHome,
  ButtonRentCar,
  HomeWrapper,
  Info,
  Title,
  Titlelist,
} from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Info>
          <Title>Connecting you to the biggest brands in car rental</Title>
          <Titlelist>
            <li>Free cancellations on most bookings</li>
            <li>Customer support in 40+ languages</li>
            <li>No hidden fees</li>
          </Titlelist>
        </Info>
        <Link to="/catalog">
          <ButtonRentCar>Rent a car</ButtonRentCar>
        </Link>
      </HomeWrapper>
      <BGImgHome />
    </>
  );
};
