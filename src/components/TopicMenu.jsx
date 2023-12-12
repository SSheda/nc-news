import { useEffect } from "react";
import GetAllTopics from "../api/GetAllTopics";

function TopicMenu({ topics, setTopics, setSearch }) {

    useEffect(() => {
        GetAllTopics().then((data) => {
            setTopics(data);
        });
    }, []);

    function handleClick(event) {
        setSearch(event.target.value)
    }

    const categories = topics.map((topic) => (
        <li key={topic.slug}>
            <button onClick={handleClick} value={topic.slug}>
                {topic.slug} 
            </button>
        </li>
    ));

    return (
        <div>
            <ul>{categories}</ul>
        </div>
    );
};

export default TopicMenu;