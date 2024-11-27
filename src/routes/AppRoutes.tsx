import { Navigate, Route, Routes } from 'react-router';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
