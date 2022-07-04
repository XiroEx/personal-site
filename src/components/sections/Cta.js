import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              ...and still so much more to come.
              </h3>
          </div>
          <div className="cta-action">
            <form id="send" onSubmit={async (e)=>{
              e.preventDefault()
              const message = document.getElementById("newsletter")
              await fetch('https://app.georgeanthony.net:8080/https://maker.ifttt.com/trigger/website_text/json/with/key/De2s7GoSHmM5JBkcUzs1L', {
                method: 'POST',
                body: JSON.stringify({message:message.value}),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              message.value = ""
              alert("Message Sent!")
              }}>
              <Input id="newsletter" type="text" label="Subscribe" labelHidden hasIcon="right" placeholder="Send me an text" autoComplete="off">
                <button type="submit" className="sendButton" form="send">
                  <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                  </svg>
                </button>
              </Input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;