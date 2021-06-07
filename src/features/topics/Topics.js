import ROUTES from "../../app/routes";
import {Link} from "react-router-dom";


export default function Topics () {

    return (
        <section>
            <h1 className="center">Topics</h1>
            <ul className="topics-list">
                <li>Hey</li>
            </ul>
            <Link 
            to={ROUTES.newTopicRoute()} 
            className="center button create-new-topic-btn" 
            title="Click to create new topic">
                Create new topic
            </Link>
        </section>

    )
}