import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Popup extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className='popup'>
                <div className='popup_open'>
                    <div className="row">
                        <div className="column header-text">
                            {t("contactUsTitle")}
                        </div>
                        <button className="column close-popup-x" onClick={this.props.closePopup}>X</button>
                    </div>
                    <div>{this.props.text}</div>
                </div>
            </div>
        );
    }
}
export default withTranslation()(Popup);