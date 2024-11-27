import { Outlet } from 'react-router';
import { ContainerLayout } from './styles';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { MenuResponsive } from '../MenuResponsive/MenuResponsive';
import { useState } from 'react';

export const Layout = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <ContainerLayout>
      <MenuResponsive visible={visible} onHide={() => setVisible(false)} />
      <Header onClickHamburguer={() => setVisible(true)} />
      <Outlet />
      <Footer />
    </ContainerLayout>
  );
};
