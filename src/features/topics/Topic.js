import { Link, useParams } from "react-router-dom";

export default function Topic () {
    const vocabularySets = {};
    const topics = {};
    let { topicID } = useParams();
    const topic = topics[topicID];



    return (
        <section>
            <h1 className='center'>Topic {topic.name}</h1>
            <ul>
                
            </ul>
        </section>
    )
}