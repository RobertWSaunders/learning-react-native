import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album_detail';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  //life cycle method
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
      this.setState({ albums: response.data })
    );
  }

  renderAlbums() {
    //make a new array based off of the fetched albums
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
