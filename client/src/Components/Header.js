import React from "react";
import Fade from "react-reveal";
import ReactPlayer from 'react-player';
import heroVideo from './AdobeStock1.mov';
import LangSelector from './LanguageSwitcher/LangSelector';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import logo from './TransparentLogoLight.svg';

function Header(props) {
  const { t } = useTranslation();
  if (!props.data) return null;

  const project = props.data.project;

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
          transform: "scaleX(1.4) scaleY(1.4)",
          opacity: "30%"
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
              {t("hometitle")}
            </a>
          </li>

          {/* <li>
            <a className="smoothscroll" href="#about">
              {t("abouttitle")}
            </a>
          </li> */}

          <li>
            <a className="smoothscroll" href="#resume">
              {t("servicestitle")}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              {t("contactustitle")}
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
            <h1 className="responsive-headline" style={{display: 'none'}}>{t("name")}</h1>
            <img src={logo} alt="Logo" style={{marginTop: '-45px'}}/>
          </Fade>
          <Fade bottom duration={1200}>
            <h3 style={{marginTop: '-80px'}}>{t("description")}</h3>
            <h3>{t("mainregions")}</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <FontAwesomeIcon icon={faReceipt} /> { t("ctaButtonHeader").toUpperCase()}
              </a>
            </ul>
          </Fade>
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