import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: <p>Prosperities in <span className="text-color-primary">progress</span></p> ,
    paragraph: 'Currently more ideas than products. But it\'s all coming together!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="projects">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Automation Meets Intelligence
                  </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://red.redbtn.io" className='redlink'>Red</a> (by <a href="https://redbtn.io" className='redlink'>redbtn.io</a>)
                  </h3>
                <p className="m-0">
                Extended and improved interface for interacting with ChatGPT that includes custom functions and features, including the ability to search Google, scrape url data, and interact with Webhooks/RESTful APIs.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a
                href="https://red.redbtn.io">
                  <Image
                    src={require('./../../assets/images/red.png')}
                    alt="Features split 03"
                    style={{height:396, margin:"auto"}} />
                </a>
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item"
                data-reveal-delay='100'>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Trading algorithmically
                  </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://eliteentri.es" className='eelink'>Elite Entries</a>
                  </h3>
                <p className="m-0">
                  An algorithmic-focused trading platform relying on cloud strategy deployment and advanced order types with over $10m+ in lifetime cryptocurrency and equity volume.                  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-left',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-delay='100'
                data-reveal-container=".split-item">
                  <a
                  href="https://eliteentri.es">
                    <Image
                    src={require('./../../assets/images/ee-favicon.ico')}
                    alt="Features split 01"
                    style={{width:396, margin:"auto"}} />
                  </a>
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" 
                data-reveal-delay='200'>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Easy Client Relations
                  </div>
                <h3 className="mt-0 mb-12">
                  (SampleCRM)
                  </h3>
                <p className="m-0">
                  Originally a simple mass SMS marketing tool for sending and scheduling mass text messages that has expanded into a growing ultra-lite CRM with conversations, contacts, notes, and built-in double text safeguards. Integrated with the Twilio API.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-delay='200'
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.gif')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;