import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideMenu.module.css"

interface Country {
  countryCode: string,
  name: string,
  flag: string,
}

const countries:Country[] = [{
  countryCode: 'pl',
  name: 'Poland',
  flag: 'https://flagcdn.com/pl.svg',
},
{
  countryCode: 'ar',
  name: 'Argentina',
  flag: 'https://flagcdn.com/ar.svg'
},
{
  countryCode: 'us',
  name: 'United States of America',
  flag: 'https://flagcdn.com/us.svg'
},
{
  countryCode: 'cz',
  name: 'Czech Republic',
  flag: 'https://flagcdn.com/cz.svg'
},
{
  countryCode: 'ro',
  name: 'Romania',
  flag: 'https://flagcdn.com/ro.svg'
}]

export const SideMenu = () => {
  return (
    <ul className={styles.menu}>
      {countries.map(country => (
        <li className={styles.menuItem} key={country.countryCode}>
          <img className={styles.flag} src={country.flag} alt={`${country.name} flag`} />
          <Link to={`country/${country.countryCode}`}>
            {country.name}
            </Link>
            </li>
          ))}
    </ul>
  )
}