import axios from "axios";

const FetchArticleById = (articleId) => {
    const urlArticles = `https://my-nc-news-893f.onrender.com/api/articles/${articleId}`
    return axios.get(urlArticles)
        .then((response) => {
            return response.data.article;
        })
}

export default FetchArticleById