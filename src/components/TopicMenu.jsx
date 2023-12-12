import { useEffect, useState } from "react";
import GetAllTopics from "../api/GetAllTopics";

function TopicMenu({ topics, setTopics}) {
    /* const [category, setCategory] = useState("")
    
    useEffect(() => {
        GetAllTopics().then((data) => {
            setTopics(data);
        });
    }, []);
    
    function handleClick(event) {
        setCategory(event.target.value)
      }
        

    const categories = topics.map((topic) => (
        <li key={topic.slug}>
            <button onClick={handleClick} value={topic.slug}>
                {topic.slug}
            </button>
        </li>
    )); */


    /* <div>
            <p>hello
                </p>    
                        <ul>{categories}</ul>
        </div> */
      
    return ( <p>hello</p> );
};

export default TopicMenu;