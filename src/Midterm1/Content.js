import React, { Component } from "react";
import HotNews from "./HotNews";
import OtherNews from "./OtherNews";
import axios from "axios";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    if (!this.state.isLoaded) this.getData();
  }
  getData = () => {
    axios.get("http://localhost:3000/news").then(res => {
      this.setState({
        listNews: res.data,
        isLoaded: true
      });
    });
  };

  render() {
    const world = this.state.listNews.filter(ele => ele.type === "World");
    const vn = this.state.listNews.filter(ele => ele.type === "Viet Nam");
    if (this.state.isLoaded)
      return (
          <div className="container">
            
            <div className="row">
              <h1>World</h1>
              <div className="col col-md-6">
              {
                <HotNews data={world.find(ele => ele.size === "large")} />
              } 
              </div>
              <div className="col col-md-6">
                {world.filter(ele => ele.size === "small").map(ele => 
                  <OtherNews data={ele}/>
                  )}
              </div>
            </div>
            <div className="row">
              <h1>Viet Nam</h1>
              <div className="col col-md-6">
              {
                <HotNews data={vn.find(ele => ele.size === "large")} />
              } 
              </div>
              <div className="col col-md-6">
                {vn.filter(ele => ele.size === "small").map(ele => 
                  <OtherNews data={ele}/>
                  )}
              </div>
            </div>
          </div> 
      );
    return <div> Loading...</div>
  }
}
