import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18n/config';
import flagEnglish from '../../assets/flags/flagEnglish.png'
import logoFr from '../../assets/flags/drapeauFr.png'
import { NavDropdown } from 'react-bootstrap';

const DropI18N = () => {

    useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <NavDropdown title={'Langue'}  >
            <NavDropdown.Item  >
                <img width="35px" onClick={() => {
                    handleClick('fr');
                }} style={{ marginRight: '5px' }} src={logoFr} alt="logo France" />Français
            </NavDropdown.Item>
            <NavDropdown.Item >
                <img onClick={() => {
                    handleClick('en');
                }} width="36px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre" />English
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropI18N