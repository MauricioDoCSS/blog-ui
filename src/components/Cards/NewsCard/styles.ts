import styled from 'styled-components';

export const ContainerNewsCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .banner {
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .texts {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .publicationDate {
    color: ${(props) => props.theme.NEWSCARD.publicationDate};
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 20px;
  }

  .title {
    color: ${(props) => props.theme.NEWSCARD.title};
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 32px;
  }

  .description {
    color: ${(props) => props.theme.NEWSCARD.description};
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 24px;
    max-height: calc(24px * 3);
    text-overflow: ellipsis;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
