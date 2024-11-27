import { AnimatePresence } from 'framer-motion';
import { GridLoader } from 'react-spinners';
import { ContainerLoader } from './styles';

interface LoaderProps {
  loading: boolean;
}

export const Loader = ({ loading }: LoaderProps) => {
  return (
    <AnimatePresence>
      {loading && (
        <ContainerLoader
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GridLoader />
        </ContainerLoader>
      )}
    </AnimatePresence>
  );
};
