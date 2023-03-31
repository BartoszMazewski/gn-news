import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Clock from '../clock/Clock'
import styles from './Footer.module.css'

export const Footer = () => {  
  const {totalResults} = useSelector((state:RootState) => state.articles)


  return (
    <div className={styles.footer}>
      <p><Clock /></p>
      <p>All articles: {totalResults}</p>
    </div>
  )
}