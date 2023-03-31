import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { viewActions } from "../view/viewSlice";
import { popupActions } from "../popup/popupSlice";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isList } = useSelector((state:RootState) => state.view)

  const viewHandler = () => {
    dispatch(viewActions.toogle())
  }

  const visiblePopupHandler = () => {
    dispatch(popupActions.visible())
    document.body.style.overflow = 'hidden';
  }
    
  return (
    <div className={styles.header}>
      <Link to={"/"}>gnNews</Link>
      <button className={styles.button} onClick={visiblePopupHandler}>Show Popup</button>
      <button className={styles.button} onClick={viewHandler}>{isList ? "Actual view - list" :  "Actual view - tile"}</button>
    </div>
  )
}