import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
