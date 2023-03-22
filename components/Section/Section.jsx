import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from 'components/Container/Container';

const Section = ({
  children,
  h1,
  h2,
  titleClassName,
  className,
  containerClassName,
}) => {
  return (
    <section className={classNames('section', className)}>
      <Container className={classNames('container', containerClassName)}>
        {h1 ? (
          <h1 className={titleClassName}>{h1}</h1>
        ) : (
          <h2 className={titleClassName}>{h2}</h2>
        )}

        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  h1: PropTypes.string,
  h2: PropTypes.string,
  titleClassName: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};
