import React, { Component } from "react";
import Slide from "react-reveal";
import { withTranslation } from "react-i18next";

class Services extends Component {
  render() {
    const { t } = this.props;
    if (!this.props.data) return null;

    const skills = this.props.data.skills.map((skills) => {
      return (
        <li className="three column" key={skills.skill}>
          <span></span>
          <em>{t("skill" + skills.skill)}</em>
        </li>
      );
    });

    return (
      <section id="services" className="light">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>{t("serviceTitle1")}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{t("conversion")}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>{t("serviceTitle2")}</span>
              </h1>
            </div>

            <div className="nine columns main-col">{t("damageRepair")}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>{t("skillsTitle")}</span>
              </h1>
            </div>

            <div className="twelve column">
              <div className="bars">
                <ul className="twelve column skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default withTranslation()(Services);
