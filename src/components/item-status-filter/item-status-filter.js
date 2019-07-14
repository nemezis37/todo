import React from 'react'
import './item-status-filter.css'

export default class ItemStatusFiler extends React.Component {

    state = {
        tabs: [ 'All', 'Important', 'Done'],
        activeTab: this.props.activeTab
    };

    onStatusFilterChange = (activeTabName) => {
        this.setState({activeTab: activeTabName});
        this.props.onStatusFilterChange(activeTabName);
    };

    render() {
        const tabs = this.state.tabs.map((item) => {
                return (<button key={item}
                                type="button"
                                className = {item === this.state.activeTab ? "btn btn-info" : "btn btn-outline-secondary"}
                                onClick={()=> this.onStatusFilterChange(item)}>{item}
                        </button>)
                }
            );

        return (
            <div className="btn-group">
                {tabs}
            </div>
        );
    }
}
