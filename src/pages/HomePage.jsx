import { BGImgHomePage, ButtonRentCar, Title, Titlelist } from './HomePage.styled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Title>
        Connecting you to the biggest brands in car rental
      </Title>
      <Titlelist>
        <li>Free cancellations on most bookings</li>
        <li>Customer support in 40+ languages</li>
        <li>No hidden fees</li>
      </Titlelist>
      <Link to="/catalog">
        <ButtonRentCar>Rent a car</ButtonRentCar>
      </Link>
      <BGImgHomePage />
    </>
  );
};
export default HomePage;
