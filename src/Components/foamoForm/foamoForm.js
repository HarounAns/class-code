import React, { Component } from 'react';
import './foamoForm.css';
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
        alert('FOAMO Bot: ' + message);        
        
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