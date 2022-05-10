import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './MaterialUiSwitchConfig';
import i18n from '../../translations/i18n'
import { Cookies } from 'react-cookie';

const LangSelector = () => {
  const [isChecked, setChecked] = useState(
    i18n.language.includes('en') ? false : true
  );

  const cookies = new Cookies();

  const changeLanguageHandler = (lang) =>
  {
    i18n.changeLanguage(lang)
    cookies.remove('siteLang')
    cookies.set('siteLang',lang)
  }

  const handleLanguageChange = evt => {
    setChecked(evt.target.checked);
  
    if (evt.target.checked === true) {
      changeLanguageHandler('fr-CA')
      } else { 
        changeLanguageHandler('en-US')
      }
  };

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          onClick={handleLanguageChange}
          checked={isChecked}
        />
      }
    />
  );
};

export default LangSelector;