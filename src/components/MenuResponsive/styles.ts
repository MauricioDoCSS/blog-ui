import styled from 'styled-components';

import { motion } from 'motion/react';

export const ContainerMenuResponsive = styled(motion.div)`
  position: fixed;
  z-index: 5;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  background-color: ${(props) => props.theme.MENU.background};
  transform-origin: top;

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .link {
    color: ${(props) => props.theme.COLORS.textColor};
    font-size: 1.125rem;
    line-height: 24px;
    text-decoration: none;
  }

  .close {
    position: absolute;
    bottom: 24px;
  }
`;
