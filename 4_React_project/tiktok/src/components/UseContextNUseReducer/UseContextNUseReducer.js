import { useRef } from 'react'
import { useStore, actions } from './store'

function UseContextNUseReducer() {
    const [state, dispatch] = useStore()
    const { todoInput, todos } = state
    const inputRef = useRef()

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))

        inputRef.current.focus()
    }

    return (
        <div className='UseContextNUseReducer'>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder='Enter todo...'
                onChange={e => dispatch(actions.setValueTodo(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos && todos.map((todo, index) => (
                    <li key={index}>
                        {todo} 
                        <span onClick={() => dispatch(actions.deleteTodo(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseContextNUseReducer