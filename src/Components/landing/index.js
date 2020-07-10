import React from 'react';
import Sidebar from './api-feed/index';
import ArticleFeed from './article-feed/index';

class Landing extends React.Component {
    render(){
        return(
            <main>
                <section className='landing'>
                    <Sidebar />
                    <ArticleFeed />
                </section>
            </main>
        )
    }
}

export default Landing