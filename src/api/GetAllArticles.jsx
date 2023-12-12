import axios from "axios";

const GetAllArticles = () => {
    const urlArticles = `https://my-nc-news-893f.onrender.com/api/articles`
    return axios.get(urlArticles)
        .then((response) => {
                return response.data.article;
        })
}

export default GetAllArticles