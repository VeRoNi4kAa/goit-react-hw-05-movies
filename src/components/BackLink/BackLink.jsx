import { useLocation } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'components/BackLink/BackLinkStyled';

export default function BackLink() {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'}>
      {/* <FaArrowLeft /> */}
      Go back
    </Link>
  );
}
