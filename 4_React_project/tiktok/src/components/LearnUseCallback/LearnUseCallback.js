import {useCallback, useState, memo} from 'react'

import Content2 from './Content2'
import Content1 from './Content1'

function LearnUseCallback() {
    const [count, setCount] = useState(0)

    // Mỗi lần render lại handleIncrease sẽ được tạo với 1 tham chiếu mới => hàm luôn được thực thi
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1)
    }

    ////////////////---- Dùng useCallback ----//////////////////
    const [count2, setCount2] = useState(0)

    // Sử dụng useCallback để tránh việc tạo mới hàm
    const handleIncrease2 = useCallback(() => {
        setCount2(prevCount => prevCount + 1)
    }, []) // 

    return (
        <div className='LearnUseCallback'>
            <h1>Count 1: {count}</h1>
            <Content1 onIncrease1={handleIncrease} />

            <h1>Count 2: {count2}</h1>
            <Content2 onIncrease2={handleIncrease2} />

        </div>
    )
}

export default LearnUseCallback;