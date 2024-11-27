import { TagEnum } from '../../enums/TagEnum';
import { ContainerTag } from './styles';

interface TagProps {
  tag?: TagEnum;
}

export const Tag = ({ tag }: TagProps) => {
  return <ContainerTag $tag={tag}>{tag}</ContainerTag>;
};
