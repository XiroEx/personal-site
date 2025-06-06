import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  status: PropTypes.string
}

const defaultProps = {
  children: null,
  status: false
}

const FormHint = ({
  children = defaultProps.children,
  className,
  status = defaultProps.status,
  ...props
}) => {

  const classes = classNames(
    'form-hint',
    status && `text-color-${status}`,
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      {children}
    </div>
  );
}

FormHint.propTypes = propTypes;

export default FormHint;