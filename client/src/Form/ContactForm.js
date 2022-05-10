import React, { useState, useRef } from "react";
import $ from 'jquery';
import emailjs from '@emailjs/browser';
import i18n from '../translations/i18n'
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    const { t } = useTranslation();
    const form = useRef();

    const [contactName, setName] = useState('');
    const [contactPhone, setPhone] = useState('');
    const [contactEmail, setEmail] = useState('');
    const [contactPreference, setPreference] = useState('');
    const [contactCity, setCity] = useState('');
    const [contactMessage, setMessage] = useState('');

    function submitRequest(e) {
        e.preventDefault();
        $("#image-loader").fadeIn();

        let templateFile = i18n.language.includes('en') ? 'template_cts85vh' : 'template_zv07g9i';

        emailjs.sendForm('service_711dkza', templateFile, form.current, 'PugOh-WHgHuI81Dij')
            .then((result) => {
                $("#image-loader").fadeOut();
                $("#message-warning").hide();
                $("#contactForm").fadeOut();
                $("#message-success").fadeIn();
            }, (error) => {
                alert("Message failed to send.")
                $("#image-loader").fadeOut();
                $("#message-warning").html(error.message);
                $("#message-warning").fadeIn();
            });
    };

    return (
        <div>
            <form ref={form} method="post" id="contactForm" name="contactForm" onSubmit={submitRequest}>
                <fieldset>
                    <div>
                        <label htmlFor="contactName">
                            {t("contactName")} <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            size="35"
                            id="contactName"
                            name="contactName"
                            value={contactName}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactPhone">
                            {t("contactPhoneNumber")} <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            size="35"
                            id="contactPhone"
                            name="contactPhone"
                            value={contactPhone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactEmail">
                            {t("contactEmail")} <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            size="35"
                            id="contactEmail"
                            name="contactEmail"
                            value={contactEmail}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>
                            {t("contactPreference")} <span className="required">*</span>
                        </label>
                        <div className="preferenceDivWrapper">
                            <div className="preferenceDiv">
                                <label htmlFor="phonePreference" className={`button preference ${contactPreference === "phone" ? "active" : ""}`}>
                                    <FontAwesomeIcon icon={faPhone} /> {t("contactPhone")}
                                </label>
                                <input
                                    type="radio"
                                    id="phonePreference"
                                    value={contactPreference}
                                    name="contactPreference"
                                    onClick={e => setPreference('phone')}
                                    hidden
                                />
                                <label htmlFor="emailPreference" id="emailPreferenceLabel" className={`button preference ${contactPreference === "email" ? "active" : ""}`}>
                                    <FontAwesomeIcon icon={faEnvelope} /> {t("contactEmail")}
                                </label>
                                <input
                                    type="radio"
                                    id="emailPreference"
                                    value={contactPreference}
                                    name="contactPreference"
                                    onClick={e => setPreference('email')}
                                    hidden
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contactCity">
                            {t("contactCity")} <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            size="35"
                            id="contactCity"
                            name="contactCity"
                            value={contactCity}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="contactMessage">
                            {t("contactMessage")} <span className="required">*</span>
                        </label>
                        <textarea
                            cols="50"
                            rows="8"
                            id="contactMessage"
                            name="contactMessage"
                            value={contactMessage}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div>
                        <button className="submit">{t("contactSubmit")}</button>
                        <span id="image-loader">
                            <img alt="" src="images/loader.gif" />
                        </span>
                    </div>
                </fieldset>
            </form>

            <div id="message-warning">{t("contactError")}</div>
            <div id="message-success">
                <FontAwesomeIcon icon={faCheck} />{t("contactSuccess")}
                <br />
            </div>
        </div>
    )
}

export default ContactForm;