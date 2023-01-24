import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news-list';
//import Footer from './components/footer';
import Lifecycles from './components/lifecycles';

class App extends Component {
    
    state = {
        news: JSON,
        footerText: 'Footer txt...',
        filteredNews: [],
        visible: true
    }

    getKeywords = (event) => {
        const keywords = event.target.value;
        const filteredNews = this.state.news.filter((newsItem) => newsItem.title.indexOf(keywords) > -1);
        this.setState({filteredNews});
    }

    toggleComp = () => {
        this.setState((state, props) => ({
            visible: !state.visible
        }));
    }

    render() {
        const {news, filteredNews} = this.state;
        return(
            <>
                <Header keywords={this.getKeywords} />
                <NewsList news={filteredNews.length === 0 ? news : filteredNews}>
                    <br/>
                    <h1>I am a child</h1>
                </NewsList>
                <button onClick={this.toggleComp}>Toggle it</button>
                <br/>
                {this.state.visible ?
                  <Lifecycles />
                  :
                  null
                }
                {/*<Footer footerText={this.state.footerText}/>*/}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
