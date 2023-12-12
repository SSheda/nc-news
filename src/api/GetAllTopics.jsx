import axios from "axios";

    const GetAllTopics = () => {
    const urlArticles = `https://my-nc-news-893f.onrender.com/api/topics`
    return axios.get(urlArticles) 
        .then((response) => {
                return response.data.topics;
        })
}

export default GetAllTopics;