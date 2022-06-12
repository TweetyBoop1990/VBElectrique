import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const cmeqimage = process.env.PUBLIC_URL + this.props.data.cmeqimage;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="about-images"
                src={cmeqimage}
                alt="CMEQ"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span><a href={`tel: ${phone}`}>{phone}</a></span>
                    <br />
                    <span><a href={`mailto: ${email}`}>{email}</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2787.6151220049896!2d-73.86941174913434!3d45.678626279001634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8d7d71aa26b5f%3A0xef0e85535a27fa50!2s6%20Pl.%20d&#39;Argenson%2C%20Blainville%2C%20QC%20J7C%204H2!5e0!3m2!1sen!2sca!4v1650744127219!5m2!1sen!2sca" width="600" height="450" title="vbelectrique Address" style={{border:0,maxWidth: '-webkit-fill-available'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
