import React, { Component } from 'react';
import LinkItem from './LinkItem';
import request from 'superagent';
import './Tiny.css';

//import articleUrls from './ArticleUrls.js'


export default class TinyLinkContainer extends Component {
  state = {
    article_urls: [],
  }
  // ON LOAD OF THE COMPONENT...
  componentDidMount = async () => {
    await this.loadArticles()
  }

  // Grabs articles from our news API
  loadArticles = async () => {
    const response = await request
      .get(`https://serene-temple-06405.herokuapp.com/articles`);
    await this.setState({ article_urls: response.body.map(item => item.url) });
  }

  render() {

    return (
      <>

        <section className="choice-content">

          <div className="flex-link-container">
            {
              this.state.article_urls.map(url =>
                <LinkItem
                  url={url} />
              )
            }
          </div>

        </section>


      </>
    )
  }
}
