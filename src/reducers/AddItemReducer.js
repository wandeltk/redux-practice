const intitialState = {
    errorMessage: "",
    toDoList: []
}
export const addItemReducer = (state = intitialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, toDoList: action.payload, errorMessage: ''}
        case 'ITEM_EXISTS_ERROR':
            return {...state, errorMessage: action.payload}
        case "ITEM_COMPLETE":
            return {...state, toDoList: action.payload, errorMessage: ''}
        default:
            return state
    }
}