import React, { Component } from "react";
import axios from "axios";
import Spiner from "../layout/Spiner";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };
  componentDidMount() {
    const api_key = "be58d4dd8ad4c7c1bc8b65bc552fe4c1";
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${api_key}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          lyrics: res.data.message.body.lyrics,
        });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${api_key}`
        );
      })
      .then((res) => {
        this.setState({
          track: res.data.message.body.track,
        });
      })

      .catch((err) => console.log(err));
  }
  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spiner />;
    } else {
      return <h1>data returned</h1>;
    }
  }
}

export default Lyrics;
