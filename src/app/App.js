import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
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
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()} activeClassName="active">Topics</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.vocabularySetsRoute()} activeClassName="active" name='vocs'>Practice sets</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.createNewVocabularySetRoute()} activeClassName="active">Create new vocabulary set</NavLink>
          </li>
        </ul>
      </nav>
      <h3>To start click on Topics</h3>
      <Switch>
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
