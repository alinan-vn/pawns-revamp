import React from 'react';

class Comments extends React.Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            users: []
        }
    }

    fetchComments = () => {
        fetch(`https://enigmatic-gorge-45286.herokuapp.com/get_votes_and_comments/${this.props.articleId}`)
        .then(resp => resp.json())
        .then(obj => {
            console.log('com', obj.comments[0])
            this.setCommentsUsers(obj.comments)
        })
    }

    setCommentsUsers = commentsArray => {
        this.setState({
            ...this.state,
            comments: commentsArray
        })
        commentsArray.forEach(comment => {
            this.fetchUser(comment.user_id)
        })
    }

    fetchUser = (id) => {
        return fetch(`https://enigmatic-gorge-45286.herokuapp.com/users/${id}`)
        .then(resp => resp.json())
        .then(user => {
            this.setUser(user)
        })
    }

    setUser = user => {
        this.setState(prevState => {
            return {
                ...prevState,
                users: [...prevState.users, user]
            }
        })
    }

    commentCard = () => {
        return this.state.comments.map(comment => {
            let user = this.state.users.find(user => comment.user_id === user.id)
            console.log(user)
            return(
                <div key={comment.id} className='comment'>
                    {user ? <img className='comment__user-pic' src={user.profile_pic} /> : null}
                    <p className='comment__user'>{user ? user.username : 'loading'}</p>
                    <p>{comment.content}</p>
                </div>
            )
        })
    }

    componentDidMount(){
        this.fetchComments()
    }

    render(){
        return(
            <section className='comments'>
                { this.commentCard() }
            </section>
        )
    }
}

export default Comments