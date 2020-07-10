const saveArticles = articles => {
    return {
        type: 'SAVE_ARTICLES',
        articles
    }
}

const currentArticle = article => {
    return {
        type: 'CHANGE_ARTICLE',
        article
    }
}

const clearArticle = () => {
    return {
        type: 'CLEAR_ARTICLE'
    }
}

const passCleanState = (json) => {
    return {
        type: 'PASS_CLEAN_STATE',
        json
    }
}


export {
    saveArticles,
    currentArticle,
    clearArticle,
    passCleanState
}