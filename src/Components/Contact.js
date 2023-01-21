import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import ContactForm from "../Form/ContactForm";
import { withTranslation } from "react-i18next";

class Contact extends Component {
  render() {
    const { t } = this.props;
    if (!this.props.data) return null;

    const message = this.props.data.contactmessage;

    return (
      <section id="popupTrigger" className="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="twelve columns header-col">
              <p className="lead">{t("contactUsTitle")}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="twelve columns">
              <ContactForm />
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Contact);
