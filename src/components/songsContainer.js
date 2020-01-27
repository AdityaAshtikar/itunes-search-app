import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongCard from './songCard';

class songsContainer extends Component {
    render() {
        const { songs } = this.props;
        let content = '';
        content = songs.length > 0 ? songs.map((song, index) => <SongCard key={index} song={song} />) : null;
        return (
            <div className='row songsContainer'>
                { content }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.songs.songs
});

export default connect(mapStateToProps)(songsContainer);