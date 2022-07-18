import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'

function TodoAppWithUseReducer() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state
    const inputRef = useRef()

    const handleSubmit = () => {
        if(!job) return
        dispatch(addJob(job))
        // dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div className='TodoAppWithUseReducer'>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo...'
                onChange={e => dispatch(setJob(e.target.value.trim()))}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs && jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        &nbsp;<span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoAppWithUseReducer