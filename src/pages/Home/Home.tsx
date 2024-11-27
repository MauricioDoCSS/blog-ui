import { NewsCard } from '../../components/Cards/NewsCard/NewsCard';
import { ContainerHome } from './styles';
import { TagEnum } from '../../enums/TagEnum';

import Img from '../../assets/images/Image.jpg';

const noticias = [
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
  {
    img: Img,
    title: 'UX review presentations',
    description:
      'How do you create compelling presentations that wow your colleagues and impress your managers because this way better but only programmers can only do this',
    tags: [TagEnum.DESIGN, TagEnum.PRESENTATION, TagEnum.RESEARCH],
    publicationDate: 'Sunday , 1 Jan 2023',
  },
];

export const Home = () => {
  return (
    <ContainerHome>
      <div className="notices">
        {noticias.map((notice, index) => (
          <NewsCard
            key={index}
            img={notice.img}
            description={notice.description}
            tags={notice.tags}
            title={notice.title}
            publicationDate={notice.publicationDate}
          />
        ))}
      </div>
    </ContainerHome>
  );
};
