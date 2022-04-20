import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './MaterialUiSwitchConfig';

const LangSelector = () => {
  // const [isChecked, setChecked] = useState(true);
  // const { i18n } = useTranslation()

  // const changeLanguageHandler = (lang) =>
  // {
  //   i18n.changeLanguage(lang)
  // }

  // const handleLanguageChange = evt => {
  //   setChecked(evt.target.checked);
  
  //   if (evt.target.checked === true) {
  //     changeLanguageHandler('fr')
  //     } else { 
  //       changeLanguageHandler('en')
  //     }
  // };

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          // onChange={handleLanguageChange}
          // checked={isChecked}
        />
      }
    />
  );
};

export default LangSelector;