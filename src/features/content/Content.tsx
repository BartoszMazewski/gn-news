import React from "react";
import { useParams } from "react-router-dom";
import { useFetchArticles } from "../../hooks/useFetchArticles";
import styles from "./Content.module.css"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const Content = () => {
  const { countryCode } = useParams();
  const { isList } = useSelector((state:RootState) => state.view);

  const articles = useFetchArticles(countryCode ? countryCode : '');

  return (
    <div className={styles.content}>
            {articles?.map(article => (
              <div className={isList? styles.contentItemList :styles.contentItemTile} key={article.title}>
                {isList ? null : article.urlToImage ? <img className={styles.img} src={article.urlToImage} alt=''></img> : <div className={styles.img}></div>}
                <p className={styles.title}> {article.title}</p>
                {isList ? null : <p>{article.description ? article.description : 'Sorry, description not available'}</p>}
                <div><p className={styles.author}>Author:</p> {article.author ? article.author : "N/A"}</div>
                <div><p className={styles.publicationDate}>Publication date:</p> {new Date(article.publishedAt).toLocaleDateString()}</div>
              </div>
      ))}
    </div>
  )
} 