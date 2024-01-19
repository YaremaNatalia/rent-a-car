import { Navigate, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
// const CatalogPage = lazy(() => import('../pages/CatalogPage'));
// const FavoritePage = lazy(() => import('../pages/FavoritePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};
