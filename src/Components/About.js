import React, { Component } from "react";
import Fade from "react-reveal";
import { withTranslation } from "react-i18next";

class About extends Component {
  render() {
    const { t } = this.props;
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const cmeqimage = process.env.PUBLIC_URL + this.props.data.cmeqimage;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="about-images" src={cmeqimage} alt="CMEQ" />
            </div>
            <div className="nine columns main-col">
              {/* <h2>{t("aboutUsTitle")}</h2>

              <p>{t('aboutBio')}</p> */}
              <div className="row">
                <div className="columns contact-details">
                  <h2>{t("contactdetailstitle")}</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {state}
                    </span>
                    <br />
                    <span>
                      <a href={`tel: ${phone}`}>{phone}</a>
                    </span>
                    <br />
                    <span>
                      <a href={`mailto: ${email}`}>{email}</a>
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89195.46720408356!2d-73.9272590284669!3d45.68378010134941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8d7d3b70c861b%3A0xfabe67a302e9227d!2sBlainville%2C%20QC!5e0!3m2!1sen!2sca!4v1670689266001!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    title="vbelectrique Address"
                    style={{ border: 0, maxWidth: "-webkit-fill-available" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default withTranslation()(About);
