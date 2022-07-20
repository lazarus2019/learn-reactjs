import { SET_VALUE_TODO, ADD_TODO, DELETE_TODO } from './constants'
import storage from './util/storage'

const initState = {
    todoInput: '',
    todos: storage.get()
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_VALUE_TODO:
            {
                return {
                    ...state,
                    todoInput: action.payload
                }
            }
        case ADD_TODO: {
            const newTodos = [...state.todos, action.payload.trim()]
            storage.set(newTodos)

            return {
                ...state,
                todoInput: '',
                todos: newTodos
            }
        }
        case DELETE_TODO: {
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            storage.set(newTodos)

            return {
                ...state,
                todos: newTodos
            }
        }
        default:
            throw new Error(`Unsupport action name: ${action.type}`)
    }
}
export { initState }
export default reducer