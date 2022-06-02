import React, { Component } from 'react'

export default class HotNews extends Component {
  render() {
    return (
      <div class="card" style={{ width: "100%" }}>
        <img src={this.props.data.image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{this.props.data.title}</h5>
            <p class="card-text">{this.props.data.content}</p>
            <p className="card-text">
                    <small className="text-muted">
                      {this.props.data.date}
                    </small>
                  </p>
        </div>
      </div>
    )
  }
}
