import React from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default class App extends React.Component {

    maxId = 100;

    deleteItem = (id) => {
        this.setState(
            ({todoData})=>{
                const idx = todoData.findIndex((el)=> el.id === id);
                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx+1)];
                return {
                    todoData : newArray
                };
            }
        );
    };

    addItem = () => {
        this.setState(({todoData})=> {
            const newItem = {label: 'New item', id: this.maxId++};
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    state = {
        todoData:[
            {label: 'Drink Coffee', id: 1},
            {label: 'Make Awesome App', id: 2},
            {label: 'Have Lunch' , id: 3}]
    };

    render() {
        const {todoData} = this.state;
        return (
            <div className="todo-app">
                <AppHeader done={1} todo={2}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData} onDeleted={this.deleteItem}/>
                <ItemAddForm
                    onClick = {this.addItem}
                />
            </div>
        );
    }
};