import styled from 'styled-components';

export const ContainerHamburguer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: ${(props) => props.theme.COLORS.textColor};
  }
`;
