import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {completeItem} from '../actions/index'

const ToDoListComponent = (props) => {
    const [displayList, setDisplayList] = useState([]);

    const complete = (e) => {
        props.completeItem(props.toDoList, e.target.id)

    }

    useEffect(() => {
        let tempArr = [];

        for(let item of props.toDoList){
            tempArr.push(<div><input type='checkbox' onChange={complete} id={item}></input>{item}</div>)
        }

        setDisplayList(tempArr)

    }, [props.toDoList])

    return (
        <>
            <div id="to-do-list">To Do List:
                {displayList}
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
    completeItem
}

export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent)