import styles from "./Welcome.module.css"

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <p className={styles.text}>WELCOME</p>
      <p className={styles.text}>CHOOSE COUNTRY</p>
    </div>
  )
}