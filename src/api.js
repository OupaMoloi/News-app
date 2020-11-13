import { NEWS_API_KEY } from "./config";

export const getHeadlineArticle = async () => {
    const response = await fetch(
      `http://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    //console.log(json); 
    return json;
};

export const getArticles = async (topic) => {
  const response = await fetch(
    `http://newsapi.org/v2/top-headlines?country=us&q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};