import { SET_VALUE_TODO, ADD_TODO, DELETE_TODO } from './constants'

export const setValueTodo = payload =>{
    return{
        type: SET_VALUE_TODO,
        payload
    }
}

export const addTodo = payload =>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = payload =>{
    return {
        type: DELETE_TODO,
        payload // todo index
    }
}