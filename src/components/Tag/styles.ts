import styled from 'styled-components';

import { TagEnum } from '../../enums/TagEnum';

export const ContainerTag = styled.div<{ $tag?: TagEnum }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  user-select: none;

  background: #f9f5ff;
  color: #6941c6;

  ${(props) =>
    props.$tag === TagEnum.DESIGN &&
    `
      background: #ffe4e6;
      color: #d92d45;
    `}
  ${(props) =>
    props.$tag === TagEnum.PRESENTATION &&
    `
      background: #e0f7fa;
      color: #00796b;
    `}
  ${(props) =>
    props.$tag === TagEnum.RESEARCH &&
    `
      background: #fff3e0;
      color: #f57c00;
    `}
`;
