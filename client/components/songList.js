import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
        <ul className="collection">
            {this.renderSongs()}
        </ul>
    )}
}

const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList); 
// first part will return a function whih will invoke SongList
// This is where bonding between query and component.