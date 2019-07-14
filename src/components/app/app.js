import React from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default class App extends React.Component {

    maxId = 100;

    createToDoItem(label){
        return {label: label, id: this.maxId++, important:false, done: false, visible: true};
    }

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

    toggleProperty  (arr, id, propName) {
        const idx = arr.findIndex((el)=> el.id === id);
        var oldElement = arr[idx];
        var newItem = {...oldElement, [propName]: !oldElement[propName]};
        const newArray = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)];
        return newArray
    }

    onToggleImportant = (id) => {
        this.setState(
            ({todoData})=>{
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                };
            }
        );
    };

    onToggleDone = (id) => {
        this.setState(
            ({todoData})=>{
                 return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                 };
            }
        );
    };

    addItem = () => {
        this.setState(({todoData})=> {
            const newItem = this.createToDoItem('New item');
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    onSearchInputChange = (searchTerm) => {
        this.setState(({todoData})=>{
            const newArray = todoData.map( (item) => {
                return {...item, visible : item.label.toLowerCase().includes(searchTerm.toLowerCase())}
                    }
                );
            return {
                todoData: newArray
            }
        })
    };

    state = {
        todoData: [
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have Lunch')
        ]
    };

    render() {
        const {todoData} = this.state;
        var doneCount = todoData.filter((el)=>el.done).length;
        var todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader done={doneCount} todo={todoCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearchInputChange={this.onSearchInputChange}/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm
                    onClick = {this.addItem}
                />
            </div>
        );
    }
};