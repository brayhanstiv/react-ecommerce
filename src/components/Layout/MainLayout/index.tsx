// Proptypes
import PropTypes from "prop-types";

interface props {
  children: string | JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: props) => {
  return <div className='flex flex-col mt-20 items-center'>{children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
