import React from 'react'
import './item-add-form.css'

export default class ItemAddForm extends React.Component {
    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit =(event) => {
        event.preventDefault();
        this.props.onClick(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder="What needs to be done"
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary"
                >Add</button>
            </form>
        );
    };
}