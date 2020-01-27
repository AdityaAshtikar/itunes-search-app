import React, { Component } from 'react';
import SearchSongComponent from './searchSongComponent';
import SongsContainer from './songsContainer';
import Loader from './loader';

import { connect } from 'react-redux';

class LandingWithSearch extends Component {
    render() {

        const { loading } = this.props;
        console.log(loading);

        return (
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-4">Search For Artists</h1>
                    <br />
                    <SearchSongComponent />
                </div>
                { loading ? <Loader /> : <SongsContainer /> }
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    loading: state.songs.loading
});

export default connect(mapStatesToProps)(LandingWithSearch);