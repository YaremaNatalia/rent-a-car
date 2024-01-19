import { Suspense } from 'react';
import { Outlet, NavLink, Navigate } from 'react-router-dom';

import { Wrapper } from './Global.styled';
import { Loader } from './Loader/Loader';
// import { Footer } from './Footer/Footer';


export const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigate>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
          <NavLink to="/catalog">
            <h2>Catalog</h2>
          </NavLink>
        </Navigate>
      </header>
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
