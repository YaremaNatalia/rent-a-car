import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './Global.styled';
import { Loader } from './Loader/Loader';
import { Header } from './Header/Header';
// import { Footer } from './Footer/Footer';


export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
