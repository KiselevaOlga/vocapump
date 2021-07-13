import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import ROUTES from './routes';
import NewTopicForm from "../components/NewTopicForm";
import Topic from "../features/topics/Topic";
import Topics from "../features/topics/Topics";
import NewVocabularySetForm from "../components/NewVocabularySetForm";
import VocabularySet from "../features/vocabularySets/VocabularySet";
import VocabularySets from "../features/vocabularySets/VocabularySets";

export default function App () {
  return (
    <Router>
      <nav data-testid="navbar">
        <ul>
          <li className='app-name'>
            VocaPump!
          </li>
          <li>
            <NavLink to={ROUTES.topicsRoute()} 
              activeClassName="active" 
              data-testid="newTopic-link" 
              className="in-link">
            Topics</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.vocabularySetsRoute()} 
              activeClassName="active" 
              data-testid="practice-link" 
              type='button'>
            Practice sets</NavLink>
          </li>
          <li className="link-box">
            <NavLink to={ROUTES.createNewVocabularySetRoute()} 
              activeClassName="active" 
              data-testid="newSet-link"
              className="new-link">
            Create new vocabulary set</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Redirect exact from="/" to="/topics" />
        <Route path="/topics">
          <TopicsRoutes />
        </Route>
        <Route path="/sets">
          <VocabularySetsRoutes />
        </Route>
      </Switch>
    </Router>    
  )
}

function TopicsRoutes () {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewTopicForm />
        </Route>
       
        <Route path={`${match.path}/:topicID`}>
          <Topic />
        </Route>
        <Route path={`${match.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  )
}

function VocabularySetsRoutes () {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/new`}>
          <NewVocabularySetForm />
        </Route>
        <Route path={`${match.path}/:vocabularySetID`}>
          <VocabularySet />
        </Route>
        <Route path={`${match.path}`}>
          <VocabularySets />
        </Route>
      </Switch>
    </>
  )
}
