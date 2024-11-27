import { Link } from 'react-router-dom';
import { ContainerFooter } from './styles';

export const Footer = () => {
  return (
    <ContainerFooter>
      <div className="links">
        <Link to="" className="link">
          Twitter
        </Link>
        <Link to="" className="link">
          LinkedIn
        </Link>
        <Link to="" className="link">
          Email
        </Link>
        <Link to="" className="link">
          RSS feed
        </Link>
        <Link to="" className="link">
          Add to Feedly
        </Link>
      </div>
    </ContainerFooter>
  );
};
