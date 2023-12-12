import { useEffect } from "react";
import GetAllArticles from "../api/GetAllArticles";
import FetchArticleById from "../api/FetchArticleByID";
import AllArticlesList from "../components/AllArticlesList";
import TopicMenu from "../components/TopicMenu";


function Home({ setAllArticles, setIsLoading, isLoading, allArticles, search, setTopics, topics, setSearch }) {
    useEffect(() => {
        GetAllArticles()
            .then((data) => {
                setAllArticles([])
                data.map((artId) =>
                    FetchArticleById(artId.article_id)
                        .then((data) => {
                            artId.text = data.body
                            if (Object.values(artId).join('').includes(search.toLowerCase())) {
                                setAllArticles(allArticles => [...allArticles, artId])
                            }
                        })
                )
                setIsLoading(false)
            })
    }, [search, topics])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <TopicMenu topics={topics} setTopics={setTopics} allArticles={allArticles} setSearch={setSearch}/>
            <AllArticlesList allArticles={allArticles} />
        </div>
    )
}

export default Home;