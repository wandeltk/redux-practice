import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/index'


const AddItemComponent = (props) => {
    const [item, setItem] = useState('');

    const add = () => {
        addItem(props.toDoList, item)
        document.getElementById("input").value = ''
    }

    const setValue = (e) => {
        setItem(e.target.value)

    }

    return (
        <>
            <div id="to-do-list">
                <input type='text' placeholder='add item...' onChange={setValue} id="input"></input>
                <button onClick={add}>Add Item</button>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return({
        toDoList: state.addItemReducer.toDoList
    })
}

const mapDispatchToProps = {
    addItem
}

export const AddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemComponent)

