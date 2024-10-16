import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
}

const Button = ({
  className,
  tag = defaultProps.tag,
  color = defaultProps.color,
  size = defaultProps.size,
  loading = defaultProps.loading,
  wide = defaultProps.wide,
  wideMobile = defaultProps.wideMobile,
  disabled = defaultProps.disabled,
  ...props
}) => {

  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  const Component = tag;
  return (
    <Component
      {...props}
      className={classes}
      disabled={disabled}
      {...defaultProps}
    />
  );
}

Button.propTypes = propTypes;
export default Button;