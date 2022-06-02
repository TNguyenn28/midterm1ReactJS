import React, { Component } from 'react'

export default class OtherNews extends Component {
  render() {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={this.props.data.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text"> {this.props.data.title}
              </p>
              <p className="card-text"> {this.props.data.content}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {this.props.data.date}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
