import { Menu } from 'lucide-react';
import { ContainerHamburguer } from './styles';

interface HamburguerProps {
  onClick?: () => void;
}

export const Hamburguer = ({ onClick }: HamburguerProps) => {
  return (
    <ContainerHamburguer onClick={onClick}>
      <Menu className="icon" size={32} />
    </ContainerHamburguer>
  );
};
