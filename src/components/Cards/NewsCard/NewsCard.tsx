import { TagEnum } from '../../../enums/TagEnum';
import { Tag } from '../../Tag/Tag';
import { BottomContent, ContainerNewsCard } from './styles';

interface NewsCardProps {
  img?: string;
  publicationDate?: string;
  title: string;
  description: string;
  tags: TagEnum[];
}

export const NewsCard = ({
  img,
  description,
  tags,
  title,
  publicationDate,
}: NewsCardProps) => {
  return (
    <ContainerNewsCard>
      <img src={img} alt="" className="banner" />

      <BottomContent>
        <div className="texts">
          <h4 className="publicationDate">{publicationDate}</h4>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>

        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </BottomContent>
    </ContainerNewsCard>
  );
};
