import { AnimatePresence } from 'motion/react';
import { ContainerMenuResponsive } from './styles';
import { useEffect } from 'react';
import { Toggle } from '../Toggle/Toggle';
import { Link } from 'react-router-dom';
import { Close } from '../Close/Close';

interface MenuResponsiveProps {
  visible: boolean;
  onHide: () => void;
}

export const MenuResponsive = ({
  visible = false,
  onHide,
}: MenuResponsiveProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <ContainerMenuResponsive
          variants={{
            hide: {
              x: '-100%',
              transition: {
                type: 'spring',
                bounce: 0,
                when: 'afterChildren',
                staggerChildren: 0.25,
              },
            },
            show: {
              x: '0%',
              transition: {
                type: 'spring',
                bounce: 0,
                when: 'beforeChildren',
                staggerChildren: 0.25,
              },
            },
          }}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <div className="content">
            <div className="links">
              <Link to="" className="link">
                Blog
              </Link>
              <Link to="" className="link">
                Projects
              </Link>
              <Link to="" className="link">
                About
              </Link>
              <Link to="" className="link">
                Newsletter
              </Link>

              <Toggle />
            </div>
          </div>

          <div className="close">
            <Close onClick={onHide} />
          </div>
        </ContainerMenuResponsive>
      )}
    </AnimatePresence>
  );
};
