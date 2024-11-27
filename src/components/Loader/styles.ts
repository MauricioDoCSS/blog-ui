import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContainerLoader = styled(motion.div)`
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100svh;
  background-color: rgba(255, 255, 255, 0.8);
`;
