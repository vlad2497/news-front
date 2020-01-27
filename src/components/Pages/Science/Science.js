import React, { useState, useEffect } from "react";
import { NewsBlock } from "./../../UI/NewsBlock";
import { Pagination } from "./../../UI/Pagination";
import Loader from "react-loader-spinner";
import { articles as getArticles } from "./../../../externalAPI";

const Science = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticles(page, "science", "ru").then(response => {
      setArticles(response.data.articles);
      setTotalPages(response.data.totalResults);
      setLoading(false);
    });
  }, [page]);

  return (
    <div>
      <div>
        {!loading ? (
          <div className="news">
            {articles.map(article => {
              return (
                <NewsBlock
                  title={article.title}
                  urlToImage={article.urlToImage}
                  description={article.description}
                  key={article.title}
                />
              );
            })}
          </div>
        ) : (
          <div className="form-wrapper">
            <Loader
              type="Puff"
              color="#40e1d1"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        )}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default Science;
