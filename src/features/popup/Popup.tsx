import React from "react"
import styles from './Popup.module.css'
import { useDispatch } from "react-redux"
import { popupActions } from "./popupSlice";

export const Popup = () => {
  const dispatch = useDispatch();

  const invisiblePopupHandler = () => {
    dispatch(popupActions.invisible());
    document.body.style.overflow = 'auto';
  }
    
  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <button className={styles.btn} onClick={invisiblePopupHandler}>Close</button>
        <div className={styles.description}>
          <p>Najwięcej problemów przyspożył mi Redux, zrozumienia jak co ma działać. Do tej pory nie korzystałem z Reduxa</p>
          <p>Najlepiej bawiłem się, gdy zacząłem rozumiem Reduxa, jak pisać reducery, jak stosować akcje</p>
        </div>
      </div>
    </div>
  )
}