import React, { Component } from 'react';

export default class songCard extends Component {
    render() {
        const { song } = this.props;
        return (
                <div className="col-md-3">
                    <div className="card">
                        <div className='card-img-container'>
                        <img 
                            className="card-img-top img-fluid"
                            src={ song.artworkUrl100 } 
                            alt={ song.collectionName + "Art Work" } />
                        </div>
                        <div className="card-block">
                            <b><em className="card-title">{ song.trackName } - { song.collectionName }</em></b>
                        </div>
                    </div>
                </div>
                )
            }
}