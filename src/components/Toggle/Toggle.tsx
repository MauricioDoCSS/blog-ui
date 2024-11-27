import { ContainerToggle } from './styles';

import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const Toggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <ContainerToggle $isDarkTheme={isDarkMode} onClick={toggleTheme}>
      <Sun className="icon" size={24} />
      <Moon className="icon" size={24} />

      <motion.div layout className="indicator"></motion.div>
    </ContainerToggle>
  );
};
