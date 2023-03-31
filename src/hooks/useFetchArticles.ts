import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchArticles } from "../features/articles/articlesSlice";

export const useFetchArticles = (countryCode:string) => {
  const dispatch = useDispatch<AppDispatch>();
  const {articlesList} = useSelector((state:RootState) => state.articles)

  useEffect(() => {
    dispatch(fetchArticles(countryCode))
  }, [dispatch, countryCode])

  return articlesList;
}