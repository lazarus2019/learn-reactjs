import { useState } from 'react'

import Heading1 from './Heading1'

function ReactMemoHOC() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div className='ReactMemoHOC'>
            <Heading1 count={count} />

            <h2>Count 1: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add 1 (Count 1)</button>

            <h2>Count 2: {count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>Add 1 (Count 2)</button>
        </div>
    )
}

export default ReactMemoHOC;