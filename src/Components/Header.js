import React from "react";
import Fade from "react-reveal";
import ReactPlayer from 'react-player';
import LangSelector from './LanguageSwitcher/LangSelector';
import { useTranslation } from "react-i18next";

function Header(props) {
  const { t } = useTranslation();
  if (!props.data) return null;

  return (
    <header id="home" className="dark">
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/images/AdobeStock1.mov'}
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

          <li>
            <a className="smoothscroll" href="#about">
              {t("abouttitle")}
            </a>
          </li>

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
            <img src={process.env.PUBLIC_URL + '/images/TransparentLogoLight.svg'} alt="Logo" style={{marginTop: '-45px'}}/>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{t("description")}</h3>
            <h3>{t("mainregions")}</h3>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#contact">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;