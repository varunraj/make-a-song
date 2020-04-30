import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';

class SongCreate extends Component{

    constructor(props){
        super(props);
        this.state = {title:''};
    }

    onSubmit(event){
        
        event.preventDefault(); // prevent default behavior of form submitting by iteself.
        // calling mutation function on props with query params will run mutation query.
        
        this.props.mutate({
            variables:{
                title:this.state.title
            }
        });
    }

    render(){
        return(
            <div>
                <h3>Create a new Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                        onChange = {event => this.setState({title:event.target.value})}
                        value= {this.state.title}
                    />
                </form>
            </div>            
        );
    }
}
// We need to get data from react component to query. We have to use query parameters here.
const mutation = gql`
    mutation AddSong($title: String){
        addSong (title:$title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);