import styled from 'styled-components';

export const ContainerToggle = styled.div<{ $isDarkTheme: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$isDarkTheme ? 'flex-end' : 'flex-start'};
  padding: 8px 16px;
  gap: 16px;
  border-radius: 29px;
  background: ${(props) => props.theme.TOGGLE.background};
  cursor: pointer;

  .icon {
    color: ${(props) => props.theme.TOGGLE.color};
  }

  .indicator {
    position: absolute;
    z-index: 2;
    justify-self: flex-start;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.TOGGLE.color};
  }
`;
