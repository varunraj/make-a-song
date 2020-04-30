import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component{
    


    renderSongs() {
        return this.props.data.songs.map((song)=> {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }
    
    render() {
        
        // Dont render the songs from server if it is not loaded yet.
        if (this.props.data.loading) { return (<div>Loading ...</div>)}

        return (
        <div>    
        <ul className="collection">
            {this.renderSongs()}
        </ul>
        <Link
            to="songs/new"
            className="btn-floating btn-large red right"
        >
            <i className="material-icons">add</i>
        </Link>
        </div>
    )}
}



export default graphql(query)(SongList); 
// first part will return a function whih will invoke SongList
// This is where bonding between query and component.