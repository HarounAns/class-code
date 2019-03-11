import React, { Component } from 'react';
import './editForm.css';
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const message = this.state.value
        
        // TODO: implement API call with message
        axios.post('https://foamochatapi.herokuapp.com/', {
            text: message,
        })
        .then(function (response) {
            alert('FOAMO Bot: ' + response.data.message);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        // used to not overwrite the submit events value, dont worry about this
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Talk to Bot:

                </label>
                <div>
                    <textarea 
                        placeholder="Talk to FOAMO Bot here!"
                        value={this.state.value} 
                        onChange={this.handleChange} />
                </div>
                <div>
                    <input class="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default EditForm;