import React from 'react';
// import { loginUser } from '../../Actions/auth';
// import { tokenValidation } from '../../Actions/userValidation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ArticleFeed extends React.Component {

    contentReducer = (string, amount) => {
        let stringArray = string.split(' ')
        stringArray = stringArray.splice(0, amount)
        let content = stringArray.join(' ')
        return content
    }

    articleCards = () => {
        console.log('hel', this.props)
        if (this.props.articles.length === 0){
            return <h1>loading</h1>
        } else {
            return this.props.articles.map((card, ind) => {
                return(
                    <div id={ind} className='article-feed__card'>
                        <h1 className='article-feed__title'>{ card.title }</h1>
                        <button onClick={() => this.handleArticle(card.id) }>Read More</button>
                        <h3 className='article-feed__author'>by { card.author }</h3>
                        <p className='article-feed__content'>{ this.contentReducer(card.content, 40) }...</p>
                    </div>
                )
            })
        }
    }

    handleArticle = articleId => {
        this.props.history.push(`/article/${articleId}`)
    }

    render(){
        return(
            <div className='article-feed'>
                <h1 className='article-feed__header'>Articles!</h1>
                { this.articleCards() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        articles: state.articleReducer.articles
    }
}

export default withRouter(connect(mapStateToProps)(ArticleFeed))