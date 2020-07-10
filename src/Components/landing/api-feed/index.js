import React from 'react'
// import { Header, List, Grid, Loader } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
// import PawnSketch from '../../Images/pawn_sketch_2.jpeg'
// import '../../App.css'

class SideBarHomeFeed extends React.Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }

    fetchChessArticles = () => {
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=chess&api-key=kRk2pujXahuLIIbwGH4fYQn46IfQJoJm')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                ...this.state,
                articles: json.response.docs
            })
            // this.setArticlesState(json.response.docs)
        })
    }

    directToNYTArticle = (url) => {
        window.open(url)
    }

    contentReducer = (string, amount) => {
        let stringArray = string.split(' ')
        stringArray = stringArray.splice(0, amount)
        let content = stringArray.join(' ')
        return content
    }

    sidebarCards = () => {
        console.log('look for url', this.state.articles[0].web_url)
        return this.state.articles.map((card, ind) => {
            let imgUrl = require('../../../images/api-feed/api-default-img.png')

            if (card.multimedia.length !== 0){
            imgUrl = 'https://static01.nyt.com/' + card.multimedia[0].url
            }

            return(
                <div id={ind} className='sidebar__card'>
                    <img className='sidebar__card-image' src={imgUrl} />
                    <h1 className='sidebar__title'><a href={card.web_url} target='_blank'>{ this.contentReducer(card.headline.main, 4) }...</a></h1>
                    <h3 className='sidebar__author'>{ card.byline.original }</h3>
                    <p className='sidebar__abstract'>{ this.contentReducer(card.abstract, 15) }...</p>
                </div>
            )
        })
    }

    componentDidMount(){
        this.fetchChessArticles()
    }

    render(){
        return(
            <div className='sidebar'>
                <h1 className='sidebare__header'>New York Times</h1>
                { this.state.articles.length === 0 ? <p>Loading</p> : this.sidebarCards() }
            </div>
            
        )
        
    }
}

export default withRouter(SideBarHomeFeed)