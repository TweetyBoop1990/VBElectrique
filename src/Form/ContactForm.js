import React, { useState, useRef } from "react";
import $ from "jquery";
import emailjs from "@emailjs/browser";
import i18n from "../translations/i18n";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [contactName, setName] = useState("");
  const [contactPhone, setPhone] = useState("");
  const [contactEmail, setEmail] = useState("");
  const [contactMessage, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(t("requiredFieldsMessage"));
  const [validationMessage, setValidationMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ToggleMessage = (validMessage) => {
    setValidMessage(validMessage);
  };

  function submitRequest(e) {
    e.preventDefault();

    setValidationMessage(false);

    if (
      !form.current.contactName.value |
      !form.current.contactPhone.value |
      !form.current.contactEmail |
      !form.current.contactMessage
    ) {
      if ($(".validation-message").hasClass("hidden")) {
        setValidationMessage(true);
      }
    } else {
      let templateFile = i18n.language.includes("en")
        ? "template_cts85vh"
        : "template_zv07g9i";

        if (formSubmitted) {
          if ($(".validation-message").hasClass("hidden")) {
            $("#image-loader").fadeOut();
            ToggleMessage(t("multipleSubmitWarning"));
            setValidationMessage(true);
            
            return;
          }
        }

      $("#image-loader").fadeIn();
      emailjs
        .sendForm(
          "service_711dkza",
          templateFile,
          form.current,
          "PugOh-WHgHuI81Dij"
        )
        .then(
          (result) => {
            $("#image-loader").fadeOut();
            setFormSubmitted(true);
            ToggleMessage(t("contactSuccess"));
            setValidationMessage(true);
          },
          (error) => {
            $("#image-loader").fadeOut();
            ToggleMessage(t("contactError"));
            setValidationMessage(true);
          }
        )
        .catch(
          (error) => {
            $("#image-loader").fadeOut();
            ToggleMessage(t("contactError"));
            setValidationMessage(true);
          }
        )
        ;
    }
  }

  return (
    <div>
      <form
        ref={form}
        method="post"
        id="contactForm"
        name="contactForm"
        onSubmit={submitRequest}
        netlify="true"
      >
        <fieldset>
          <div className="row">
            <div className="six columns">
              <div>
                <label htmlFor="contactName">{t("contactName")}</label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                  value={contactName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactPhone">{t("contactPhoneNumber")}</label>
                <input
                  type="text"
                  size="35"
                  id="contactPhone"
                  name="contactPhone"
                  value={contactPhone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">{t("contactEmail")}</label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  value={contactEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="six columns">
              <label htmlFor="contactMessage">{t("contactMessage")}</label>
              <textarea
                cols="50"
                rows="3"
                id="contactMessage"
                name="contactMessage"
                value={contactMessage}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <div>
                <button className="submit">{t("contactSubmit")}</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "validation-message text-center " +
              (validationMessage ? "" : "hidden")
            }
          >
            {validMessage}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
