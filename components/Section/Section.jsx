import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from 'components/Container/Container';

const Section = ({
  children,
  h2,
  titleClassName,
  className,
  containerClassName,
  id = '',
}) => {
  return (
    <section className={classNames('section', className)} id={id}>
      <Container
        className={classNames(
          'container',
          `${containerClassName ? containerClassName : ''}`,
        )}
      >
        {h2 && (
          <h2
            className={classNames(
              'sectionTitle',
              `${titleClassName ? titleClassName : ''}`,
            )}
          >
            {h2}
          </h2>
        )}

        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  h2: PropTypes.string,
  titleClassName: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  id: PropTypes.string,
};
