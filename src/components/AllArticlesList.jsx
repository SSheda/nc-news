import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { isoStringToDate } from '../isoStringToDate';

function AllArticlesList({ allArticles }) {

    const articles = allArticles.map((article) =>
        <li className="article" key={article.article_id}>
            <h3 className="articleTitle">{article.title}</h3>
            <p className="articleTopic">Topic: {article.topic}</p>
            <p className="articleBody">{article.text.slice(0, 155)} <span className="more">...more</span></p>
            <p className="articleDate">{isoStringToDate(article.created_at)}</p>
            <p className="articleAuthor">{article.author}</p>
            <div className="articleVotes">
                <i>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </i>
                <p>
                    {article.votes}
                </p>
                <i>
                    <FontAwesomeIcon icon={faThumbsDown} />
                </i>
            </div>
        </li >)
    return (
        < ul className="articleList" >
            {articles}
        </ul >
    )
}
export default AllArticlesList;