function articleReducer (
    state = {
        articles: [],
        article: false
    },
    action
){
    switch(action.type){
        case 'SAVE_ARTICLES':
            return {
                ...state,
                articles: action.articles
            }
        case 'CHANGE_ARTICLE':
            return {
                ...state,
                article: action.article
            }
        case 'CLEAR_ARTICLE':
            return {
                ...state,
                article: null
            }
        default:
            return state
    }
}

export default articleReducer
