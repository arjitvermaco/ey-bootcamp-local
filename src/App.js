import React, { useEffect, useState } from "react";
import loadingGif from "./loading.gif";
import NewsCard from "./NewsCard";

export default function App() {
  let apiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=e70dffcac4be47f4b26b273e14766004";

  let [loading, setLoading] = useState(true);
  let [articles, setArticles] = useState([]);
  let [error, setError] = useState(null);

  async function getNewData() {
    //fetch
    let response = await fetch(apiUrl);
    console.log("Response from API:", response);
    let result = await response.json();
    console.log(result);
    setArticles(result);
    setLoading(false);
  }

  //will only run once when the component is loaded
  useEffect(() => {
    getNewData();
  }, []);

  return (
    <>
      <header className="w-full text-center bg-white h-16 shadow-md flex justify-center items-center">
        News Website
      </header>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center mt-12 text-2xl">
            Fetched {articles.totalResults} News articles for you
          </h1>
          <div className="flex flex-wrap">
            {articles.articles.map((article) => {
              return <NewsCard article={article} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

function Loader() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="w-24 mx-auto mt-12" />
    </>
  );
}
