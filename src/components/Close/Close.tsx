import { ContainerClose } from './styles';

import { X } from 'lucide-react';

interface CloseProps {
  onClick?: () => void;
}

export const Close = ({ onClick }: CloseProps) => {
  return (
    <ContainerClose onClick={onClick}>
      <X size={32} className="icon" />
    </ContainerClose>
  );
};
