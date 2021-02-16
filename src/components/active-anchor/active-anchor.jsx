import React from 'react';
import PropTypes from 'prop-types';


const ActiveAnchor = React.forwardRef(({href: _href, navigate: _navigate, ...props}, ref) => {
  return <a ref={ref} {...props}/>;
});

ActiveAnchor.displayName = `InactiveAnchor`;

ActiveAnchor.propTypes = {
  href: PropTypes.any,
  navigate: PropTypes.any,
};


export default ActiveAnchor;
