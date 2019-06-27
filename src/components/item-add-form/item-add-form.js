import React from 'react'
import './item-add-form.css'

const ItemAddForm = ({onClick})=>{
    return (
        <div className=" item-add-form">
            <button
                className="btn btn-outline-secondary"
                onClick={onClick}
            >Add item</button>
        </div>
    )
};

export default ItemAddForm;