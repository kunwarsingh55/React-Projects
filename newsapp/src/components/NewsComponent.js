import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class NewsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1

        }
        document.title = props.category.substring(0, 1).toUpperCase() + props.category.substring(1);
    }

    async getArticles() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=542c328bfb35425da0268440f94727bb&page=${this.state.page}&pagesize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: false });
        this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults});
    }

    componentDidMount =()=> {
        this.getArticles();
    }

    prevPage =()=> {
        this.setState({page : this.state.page-1});
        this.getArticles();
       //console.log("Next");
    }
    nextPage =()=> {
        this.setState({page : this.state.page+1});
        this.getArticles();
       //console.log("Next");
    }


    render() {
        return (
            <>
                <h1 className='text-center my-5'>News - Top Headlines - { this.props.category.substring(0, 1).toUpperCase() + this.props.category.substring(1)}</h1>
                {this.state.loading && <Spinner />}
                <div className="container my-3">
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ''} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toGMTString()} source={element.source.name}/>
                                </div>
                            );
                        })
                        }
                    </div>
                    <footer>
                        <div className="container d-flex justify-content-between my-5">
                        <button type="button" disabled={this.state.page<=1} className="btn btn-dark"  onClick={this.prevPage}>Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}className="btn btn-dark"  onClick={this.nextPage}>Next</button>
                    </div>
                    </footer>
                    
                </div>

            </>
        );
    }
}