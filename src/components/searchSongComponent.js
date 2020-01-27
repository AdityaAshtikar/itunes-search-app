import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSongs, fetchSongs, setLoading } from '../actions/searchActions';

export class SearchComponent extends Component {

    onChange = e => {
        this.props.searchSongs(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchSongs(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className='searchFormContainer'>
                <form id='searchForm' onSubmit={this.onSubmit}>
                    <div className="lead">
                        <div className="input-group">

                            <input 
                                autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Enter Artist's name"
                                onChange={this.onChange} />

                            <div className="input-group-append">
                                <button className="btn btn-secondary" 
                                        type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStatesToProps = state => ({
    text: state.songs.text
})

export default connect(mapStatesToProps, {searchSongs, fetchSongs, setLoading})(SearchComponent);