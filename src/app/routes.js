const ROUTES = {
    topicsRoute: () => "/topics",
    topicRoute: (id) => `/topics/${id}`,
    newTopicRoute: () => "/topics/new",
    vocabularySetsRoute: () => "/sets",
    vocabularySetRoute: (id) => `/sets/${id}`,
    createNewVocabularySetRoute: () => "/sets/new"
}

export default ROUTES;
// newQuizRoute: () => "/quizzes/new",
// quizRoute: (id) => `/quizzes/${id}`,
// quizzesRoute: () => "/quizzes",
// newTopicRoute: () => "/topics/new",
// topicRoute: (id) => `/topics/${id}`,
// topicsRoute: () => "/topics",
// };
