import React, { useState, useEffect } from "react";
import { articles as getArticles } from "./../../../externalAPI";
import { NewsBlock } from "./../../UI/NewsBlock";
import { Pagination } from "./../../UI/Pagination";
import Loader from "react-loader-spinner";
import Select from "react-dropdown-select";

const optionsCountries = [
  { label: "Russia", value: "ru" },
  { label: "England", value: "gb" }
];
const optionsCategories = [
  { label: "General", value: "general" },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" }
];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(true);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("gb");
  const [search, setSearch] = useState("");
  let searchTimer;

  useEffect(() => {
    setLoading(true);
    getArticles(page, category, country, search).then(response => {
      setArticles(response.data.articles);
      setTotalPages(response.data.totalResults);
      setLoading(false);
    });
  }, [page, category, country, search]);

  const setCategoryValues = values => {
    setCategory(values[0].value);
  };

  const setCountryValues = values => {
    setCountry(values[0].value);
  };

  const searchChange = event => {
    let searchWord = event.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
      setSearch(searchWord);
    }, 1000);
  };

  return (
    <div>
      <div className="filter-wrapper">
        <div className="search">
          <input
            className="search__input"
            type="search"
            placeholder="Enter keyword"
            onChange={event => searchChange(event)}
          />
        </div>
        <div className="select">
          <div className="select-wrapper">
            <Select
              options={optionsCountries}
              onChange={values => setCountryValues(values)}
              color="#8aff"
              searchable={false}
              placeholder="Country"
              className="select__item"
            />
          </div>
          <div className="select-wrapper">
            <Select
              options={optionsCategories}
              onChange={values => setCategoryValues(values)}
              color="#8aff"
              searchable={false}
              placeholder="Category"
              className="select__item"
            />
          </div>
        </div>
      </div>
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

export default Home;
