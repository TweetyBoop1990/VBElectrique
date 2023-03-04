import React, { Component } from "react";
import Fade from "react-reveal";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    const { t } = this.props;
    const developer = this.props.data.developer;
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>
                  &copy; {t('copyright')} {new Date().getFullYear()} VB Électrique Inc.
                </li>
                <li>
                  Design by{" "}
                  <a
                    href={
                      "mailto:" +
                      developer.email +
                      "?subject=" +
                      developer.subject +
                      "&body=" +
                      developer.body
                    }
                  >
                    TweetyBoopDev
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
