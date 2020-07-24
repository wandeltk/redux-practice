import {store} from '../index';

const addItemAction = (items, item) => {
    let newList = items;
    let exists = false

    for(let x of items){
        if(x == item){
            exists = true;
        }
    }

    console.log(newList)
    
    if (exists){
        return {
            type: 'ITEM_EXISTS_ERROR',
            payload: "The item you tried to add was already on your to do list!"
        }

    } else {
        return {
            type: 'ADD_ITEM',
            payload: [...newList, item]
        }
    }
    
}

const completeItemAction = (items, itemComplete) => {
    let newList = items;
    newList = newList.filter(item => item !== itemComplete)
    return {
        type: "ITEM_COMPLETE",
        payload: newList
    }
}

export const addItem = (items, item) => store.dispatch(addItemAction(items, item));
export const completeItem = (items, item) => store.dispatch(completeItemAction(items, item));