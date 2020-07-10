import React from 'react';
import { connect } from 'react-redux';
import { dateFilter } from '../../functions/index';
import Comments from './comments/index';

class Article extends React.Component {
    constructor(){
        super()
        this.state = {
            article: null
        }
    }

    setArticle = () => {
        let id = this.props.history.location.pathname
        id = id.split('/')[2]
        id = parseInt(id)
        let article = this.props.articles.filter(article => article.id === id)

        if (article.length !== 0){
            let card = article[0]
            console.log(card)

            const date = dateFilter(card.created_at)

            return(
                <div>
                    <h1>{card.title}</h1>
                    <h3 className='article__author'>{card.author}</h3>
                    <h5 className='article__date'>{date}</h5>
                    <p className='article__text'>{card.content}</p>
                </div>
            )
        }
    }

    render(){
        return(
            <section className='article'>
                { this.props.articles === [] ? <p>loading</p> : this.setArticle() }

                <hr />
                
                <Comments />
            </section>
        )
    }
}

const maptStateToProps = state => {
    return {
        articles: state.articleReducer.articles
    }
}

export default connect(maptStateToProps)(Article)