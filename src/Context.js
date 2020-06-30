import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
  };

  componentDidMount() {
    const api_key = "be58d4dd8ad4c7c1bc8b65bc552fe4c1";
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${api_key}`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          track_list: res.data.message.body.track_list,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
