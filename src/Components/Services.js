import React, { Component } from "react";
import Slide from "react-reveal";
import { withTranslation } from "react-i18next";

class Services extends Component {
  render() {
    const { t } = this.props;
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

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
