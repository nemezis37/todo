import React from 'react'
import TodoListItem from '../todo-list-item'
import './todo-list.css'


const searchTodos = (todos, searchTerm) => {
        return todos.filter( (item) =>  item.label.toLowerCase().includes(searchTerm.toLowerCase()));
};
const filterStatusTodos = (todos, activeStatusTab) => {

        switch (activeStatusTab){
            case 'Important': return todos.filter(x=>x.important);
            case 'Done': return todos.filter(x=> x.done);
            case 'All': return todos;
            default: return todos;
        }
};

const TodoList  = ({ todos, searchTerm, activeStatusTab, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = filterStatusTodos( searchTodos(todos, searchTerm ), activeStatusTab).map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={()=>{onDeleted(id)}}
                    onToggleImportant={()=> {onToggleImportant(id)}}
                    onToggleDone={()=>{onToggleDone(id)}}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>);
};

export default TodoList;