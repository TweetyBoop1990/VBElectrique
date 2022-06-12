import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import ContactForm from '../Form/ContactForm';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const message = this.props.data.contactmessage;

    return (
      <section id="contact" className="">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="twelve columns">
              <ContactForm />
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="twelve columns footer-widgets">

              <div className="widget widget_tweets">
                {/* <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul> */}
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
