import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: <p>Details paint the <span className="text-color-primary">picture</span></p>,
    paragraph: <p><span className="text-color-primary" style={{fontWeight:'bold'}}>Skills</span> reflect a marriage of personality & interests.</p>
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="skills">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg').default}
                      alt="Features tile icon 01"
                      width={48}
                      height={48} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Development
                    </h4>
                  <p className="m-0 text-sm">
                    Full stack, from the frontend to the backend, database & server management, deployment, administration, scaling, & leveraging of cutting edge web technologies.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"  style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg').default}
                      alt="Features tile icon 02"
                      width={68}
                      height={68} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Trading
                    </h4>
                  <p className="m-0 text-sm">
                    Building powerful tools with algorithmic signals, automated trades, & straight-forward interfaces, so you always feel in control. Human passion, computational logic. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg').default}
                      alt="Features tile icon 04"
                      width={54}
                      height={54} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Artificial Intelligence
                    </h4>
                  <p className="m-0 text-sm">
                    Building on top of and applying machine learning models to real-world problems. From chatbots to image recognition, voice, & more.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg').default}
                      alt="Features tile icon 05"
                      width={56}
                      height={56} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Decentralization
                    </h4>
                  <p className="m-0 text-sm">
                    Programming money to increase capital efficiency, access new markets, & provide immutability to accounting & data. Automate finances & workflows without reducing liquidity or authority.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom"  data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg').default}
                      alt="Features tile icon 03"
                      width={56}
                      height={56} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Consulting
                    </h4>
                  <p className="m-0 text-sm">
                    Drop in consulting. Improve your web presence, client management, marketing, processing, financial efficiency, & more. Let's chat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16" style={{borderRadius:2.5, width:64, height:64}}>
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg').default}
                      alt="Features tile icon 06"
                      width={56}
                      height={56} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Selling
                    </h4>
                  <p className="m-0 text-sm">
                    Client relations & contact management, analytics, & payment processing. Simplified systems that make sales easy, so you can focus on selling.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;