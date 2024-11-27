import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  padding: 20px;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .links {
    display: none;
    align-items: center;
    gap: 14px;
  }

  .logoText {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.COLORS.borderColor};
    border-bottom: 1px solid ${(props) => props.theme.COLORS.borderColor};
  }

  .text {
    text-transform: uppercase;
    color: ${(props) => props.theme.COLORS.textColor};
    font-size: 72px;
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {
    padding: 30px 112px;

    .hamburguer {
      display: none;
    }

    .links {
      display: flex;
    }

    .link {
      color: ${(props) => props.theme.COLORS.textColor};
      font-size: 1.25rem;
      line-height: 24px;
      text-decoration: none;
    }

    .text {
      font-size: 243.8px;
    }
  }
`;
