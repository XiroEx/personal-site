import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';


import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  )
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [picture, setPicture] = useState('profile.jpg')
  const handleScroll = () => {
    const position = window.pageYOffset;
    //setPicture(`bad-headshot${Math.floor(position/100)}.png`)
    switch (Math.floor(position/100)) {
      case 0 : {
        setPicture('bad-headshot3.png')
        break;
      }
      case 1 : {
        setPicture('bad-headshot2.png')
        break;
      }
      case 2 : {
        setPicture('bad-headshot.png')
        break;
      }
      case 3 : {
        setPicture('placeholder1.png')
        break;
      }
      case 4 : {
        setPicture('placeholder2.png')
        break;
      }
      case 5 : {
        setPicture('placeholder3.png')
        break;
      }
      case 6 : {
        setPicture('placeholder4.png')
        break;
      }
      case 7 : {
        setPicture('placeholder5.png')
        break;
      }
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  } 
  
  useEffect(()=>{
    window.matchMedia("(min-width: 600px)").addEventListener('change', e => setMatches( e.matches ));
    //window.addEventListener("scroll", handleScroll);

    return () => {
      //window.removeEventListener("scroll", handleScroll);
    };
  },[])

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  let scrollformore
  if (matches) scrollformore = <span className='reveal-from-bottom' data-reveal-delay='3000'>Really. <br/> <a href='#skills' className='reveal-from-bottom' data-reveal-delay='4000'>Scroll for more ↓</a></span>
   else scrollformore = <span className='reveal-from-bottom' data-reveal-delay='2000'>Really. <br/> <a href='#skills' data-reveal-delay='4000'>Scroll for more ↓</a></span>
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses} style={{paddingTop:40}} sx={{paddingTop:{xs:10, sm:40}}}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Without work nothing <span className="text-color-primary">prospers</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Building value by embracing innovations, reducing friction, & anticipating trends. Professional tools developed for everyone. {scrollformore}
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#projects">
                    Projects
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/xiroex/georgeanthony.net">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="600">
            <a
              data-video="https://www.youtube.com/embed/sOhhO0oU0RI"
              aria-controls="video-modal"
              href="#0"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require(`./../../assets/images/${picture}`)}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/sOhhO0oU0RI"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;