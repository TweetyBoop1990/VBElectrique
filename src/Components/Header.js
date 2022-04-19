import React from "react";
import Fade from "react-reveal";
import ReactPlayer from 'react-player';
import heroVideo from './istockphoto-1266078247-640_adpp_is.mp4';
import { useTranslation } from 'react-i18next';
import LangSelector from './LanguageSwitcher/LangSelector';

const Header = (props) => {
  const { t } = useTranslation();

  if (!props.data) return null;

  const project = props.data.project;
  const github = props.data.github;
  const name = props.data.name;
  const description = props.data.description;

  return (
    <header id="home">
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          width: "100%",
          left: 0,
          top: 0,
          transform: "scaleX(1.4) scaleY(1.4)"
        }}
      />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              {t('HOME.TITLE')}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              {t('ABOUT.TITLE')}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              {t('SERVICES.TITLE')}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
          <li className="">
            <LangSelector />
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}.</h3>
          </Fade>
          <hr />
          {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;