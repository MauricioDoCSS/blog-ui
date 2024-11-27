import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 1rem 16px 0 16px;

  .notices {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    padding: 6rem 112px;
  }
`;
