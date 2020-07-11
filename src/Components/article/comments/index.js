import React from 'react';

class Comments extends React.Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    fetchComments = () => {
        fetch(`http://localhost:3000/get_votes_and_comments/${this.props.articleId}`)
        .then(resp => resp.json())
        .then(obj => {
            // console.log('com', obj.comments)
            this.setState({
                ...this.state,
                comments: obj.comments
            })
        })
    }

    componentDidMount(){
        this.fetchComments()
    }

    render(){
        return(
            <div>
                COMMENTS
            </div>
        )
    }
}

export default Comments