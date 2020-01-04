import { decorate, observable, action } from "mobx";
import { articles } from "./../externalAPI";

class HomeStore {
  articles = [];

  getArticles() {
    articles().then(response => {
      this.articles = response.data.articles;
    });
  }
}

decorate(HomeStore, {
  articles: observable,
  getArticles: action
});

export default new HomeStore();
