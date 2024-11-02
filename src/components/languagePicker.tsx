import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

const languages = [
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "tr", name: "Türkçe" },
  { code: "de", name: "Deutsch" },
];

const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownButton
      id="dropdown-language-picker"
      title={
        languages.find((lang) => lang.code === i18n.language)?.name ||
        "Select Language"
      }
      variant="secondary"
    >
      {languages.map((language) => (
        <Dropdown.Item
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          active={i18n.language === language.code}
        >
          {language.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default LanguagePicker;
