import React from "react";
import styles from "./Wrapper.module.css"

type Props = {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}