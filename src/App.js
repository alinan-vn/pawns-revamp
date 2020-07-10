import React from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './scss/main.scss';

import { saveArticles } from '../src/Actions/articles'


import Landing from './Components/landing/index';
import Article from './Components/article/index';

class App extends React.Component {

  fetchArticles = () => {
    fetch('http://localhost:3000/articles/')
    .then(resp => resp.json())
    .then(articles => this.props.saveArticles(articles))
  }

  componentDidMount(){
    this.fetchArticles()
  }

  render(){
    return(
      <Router >
        <Route exact path='/' component={Landing} />
        <Route exact path='/article/:id' component={Article} />
      </ Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.articleReducer.article,
    user: state.authReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
      saveArticles: articles => dispatch(saveArticles(articles)),
      // loginUser: user => dispatch(loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
