import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src={this.props.imgUrl}
            className="card-img-top"
            height="180rem"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6>
              <span className="badge bg-success text-light">
                {this.props.source}
              </span>
            </h6>
            <p className="card-text" style={{ fontSize: "15px" }}>
              {this.props.description}
            </p>
            <p className="card-text">
              <small class="text-muted">
                By {this.props.author}, {this.props.date}
              </small>
            </p>
            <a
              href={this.props.newsUrl}
              target="_blank"
              className="btn btn-primary text-light"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
