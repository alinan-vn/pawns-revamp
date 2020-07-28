import React from 'react';
import { connect } from 'react-redux';
import { dateFilter } from '../../functions/index';
import Comments from './comments/index';

class Article extends React.Component {
    
    setArticle = () => {
        let id = this.props.history.location.pathname
        id = id.split('/')[2]
        id = parseInt(id)

        let article = this.props.articles.filter(article => article.id === id)

        if (article.length !== 0){
            let card = article[0]

            const date = dateFilter(card.created_at)
            const update = dateFilter(card.updated_at)
            let text

            if (date === update){
                text = date
            } else {
                text = `${date}, updated at ${update}`
            }

            return(
                <div className='article__card'>
                    <h1 className='article__title'>{card.title}</h1>
                    <h3 className='article__author'>written by {card.author}</h3>
                    <h5 className='article__date'>{text}</h5>
                    <p className='article__text'>{card.content}</p>

                    <hr />
                
                    <Comments articleId={id} />
                </div>
            )
        }
    }

    render(){
        return(
            <section className='article'>
                { this.props.articles === [] ? <p>loading</p> : this.setArticle() }
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