import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding: 30px 0;

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .link {
    font-size: 1.25rem;
    line-height: 24px;
    color: ${(props) => props.theme.COLORS.textColor};
    text-decoration: none;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    padding: 30px 112px;

    .links {
      flex-direction: row;
    }
  }
`;
