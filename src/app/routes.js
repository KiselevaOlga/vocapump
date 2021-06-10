const ROUTES = {
    topicsRoute: () => "/topics",
    topicRoute: (id) => `/topics/${id}`,
    newTopicRoute: () => "/topics/new",
    vocabularySetsRoute: () => "/sets",
    vocabularySetRoute: (id) => `/sets/${id}`,
    createNewVocabularySetRoute: () => "/sets/new"
}

export default ROUTES;
