import React, { Component } from "react";
import ContactForm from "../Form/ContactForm";
import Popup from "./Popup";
import $ from "jquery";

class Lightbulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      classNames: "",
      animationFinished: false,
      showAnimationStartLabel: false,
    };
  }

  startStopAnimation = () => {
    const { classNames } = this.state;

    this.setState({ classNames: classNames ? "" : "animation" });
  };

  onAnimationStart = () => {
    this.setState({
      animationFinished: false,
      showAnimationStartLabel: true,
      classNames: "animation",
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      showAnimationStartLabel: false,
      classNames: "",
    });
    this.togglePopup();
  };

  togglePopup() {
    this.lightbulbSwitch();
    this.setState({
      showPopup: !this.state.showPopup,
    });
    document.location.hash = '';
  }

  lightbulbSwitch() {
    $("body").toggleClass("night");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column corner-cta-button">
            <div className="bulb-container">
              <div
                className="bulb-light"
                onClick={this.startStopAnimation}
                onAnimationEnd={this.onAnimationEnd}
                onAnimationStart={this.onAnimationStart}
              >
                <div id="light"></div>

                <div id="bulb">
                  <div className="bulb-top">
                    <div className="reflection"></div>
                  </div>
                  <div className="bulb-middle-1"></div>
                  <div className="bulb-middle-2"></div>
                  <div className="bulb-middle-3"></div>
                  <div className="bulb-bottom"></div>
                </div>

                <div id="base">
                  <div className="screw-top"></div>
                  <div className="screw-a"></div>
                  <div className="screw-b"></div>
                  <div className="screw-a"></div>
                  <div className="screw-b"></div>
                  <div className="screw-a"></div>
                  <div className="screw-b"></div>
                  <div className="screw-c"></div>
                  <div className="screw-d"></div>
                  <div className={`wire ${this.state.classNames}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={this.callRef} />

        {this.state.showPopup ? (
          <Popup
            text={<ContactForm />}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Lightbulb;
