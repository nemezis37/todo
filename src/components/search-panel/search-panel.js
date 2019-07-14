import React from 'react'
import './search-panel.css'

export default class SearchPanel extends React.Component{
    state = {
        term: ''
    };

    searchTermPlaceholder = 'Type to search';

    onSearchTermChange = (event) =>{
        this.setState({term: event.target.value});
        this.props.onSearchInputChange(event.target.value)
    };

    render() {
        return  (<input
            placeholder={this.searchTermPlaceholder}
            className="form-control search-input"
            onChange={this.onSearchTermChange}
            value={this.state.term}
        />);
    }
}