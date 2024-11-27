import { ContainerHeader } from './styles';
import { Hamburguer } from '../Hamburguer/Hamburguer';
import { NavLink } from 'react-router-dom';
import { Toggle } from '../Toggle/Toggle';

interface HeaderProps {
  onClickHamburguer?: () => void;
}

export const Header = ({ onClickHamburguer }: HeaderProps) => {
  return (
    <ContainerHeader>
      <div className="nav">
        Seu nome aqui
        <div className="hamburguer">
          <Hamburguer onClick={onClickHamburguer} />
        </div>
        <div className="links">
          <NavLink to="" className="link">
            Blog
          </NavLink>
          <NavLink to="" className="link">
            Projects
          </NavLink>
          <NavLink to="" className="link">
            About
          </NavLink>
          <NavLink to="" className="link">
            Newsletter
          </NavLink>

          <Toggle />
        </div>
      </div>

      <div className="logoText">
        <span className="text">The Blog</span>
      </div>
    </ContainerHeader>
  );
};
