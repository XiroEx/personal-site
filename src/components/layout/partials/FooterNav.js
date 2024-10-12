import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://blog.eliteentri.es/">Blog</a>
        </li>
        <li>
          <a href="mailto:george8794@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/georgeanthony">Tips</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;