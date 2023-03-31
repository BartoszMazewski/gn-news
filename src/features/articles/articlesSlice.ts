import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FetchArticleResponse {
  articles: Article[],
  status: string,
  totalResults: number,
}

export interface Article {
  author: string,
  content: string | null,
  description: string | null,
  publishedAt: string,
  title: string,
  url: string,
  urlToImage: string | null,
}

interface ArticlesState {
  articlesList: Article[],
  loading: boolean,
  totalResults: number,
}

const initialState: ArticlesState = {
  articlesList: [],
  loading: false,
  totalResults: 0,
};

const apiKey = process.env.REACT_APP_API_KEY

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (countryCode: string):Promise<FetchArticleResponse> => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`);
    const data = await response.json();
    return data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articlesList = action.payload.articles;
        state.loading = false;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.articlesList = [];
        state.loading = false;
      });
  },
})

export const articlesActions = articlesSlice.actions;
export default articlesSlice.reducer;