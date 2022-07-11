import { useState } from "react";

function TodoListWithUseState() {
    const TODOLIST_KEY = 'TODOLIST'

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState(() => {
        const jsonTodoList = JSON.parse(localStorage.getItem(TODOLIST_KEY))

        return jsonTodoList ?? []
    })

    const updateLocalStorage = (value) => {
        localStorage.setItem(TODOLIST_KEY, JSON.stringify(value))
    }

    const handleTodo = () => {
        setTodoList(prev => {
            const newTodoList = todo.trim().length > 0 ? [...prev, todo] : [...prev]

            // Save to Local storage
            updateLocalStorage(newTodoList)

            return newTodoList
        })
        setTodo('')
    }

    const handleDeleteTodo = (id) => {
        setTodoList(prev => {
            const newTodoList = prev.filter((item, index) => index !== id)

            // Save to Local storage
            updateLocalStorage(newTodoList)

            return newTodoList
        })
    }

    return (
        <div className='TodoListWithUseState'>
            <input
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyUp={e => e.keyCode === 13 && handleTodo}
            />
            <button onClick={handleTodo}>Add</button>

            <ul>
                {todoList && todoList.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <span onClick={() => handleDeleteTodo(index)}> x </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoListWithUseState;