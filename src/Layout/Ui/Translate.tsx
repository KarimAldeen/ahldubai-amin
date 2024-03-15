import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useLanguage, useLanguageMenu } from '../../Hooks/useChangeLanguage';
import i18next from 'i18next';
import type { MenuProps } from 'antd';

export default function Translate() {
  const { changeLanguage } = useLanguage();
  const { languageOptions } = useLanguageMenu();  

  const handleLanguageChange = (newLanguage:string) => {
    changeLanguage(newLanguage);
  };

  const items: MenuProps['items'] = languageOptions.map((option:any, index:any) => ({
    key: option.code,
    label: (
      <a key={option.code} onClick={() => handleLanguageChange(option.code)}>
        <img alt='' src={option.icon} width={20} height={20} /> {option.label}
      </a>
    )
  }));
  

  return (
    <div className='Translate'>
      <Dropdown trigger={["click"]} menu={{items}} placement="bottomRight">
        <span>
          {languageOptions.map((option:any, index:any) => (
            option.code === i18next.language ?
              <React.Fragment key={index}>
                <img alt='' src={option.icon} width={20} height={20} /> {option.label}
              </React.Fragment>
              : null
          ))}
        </span>
      </Dropdown>
    </div>
  );
}
