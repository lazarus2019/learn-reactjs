import {useState, useEffect, useLayoutEffect} from 'react'

function LearnUseLayoutEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => { 
        if (count > 3) {
            setCount(0)
        }
    }, [count])
    // useEffect trong trường hợp này vội vàng cập nhật lại count = 0 trong khi trước đó UI đã render ra count = 4

    // Xử lý useLayoutEffect để giải quyết tình trạng trên
    // useLayoutEffect(() => { 
    //     if (count > 3) {
    //         setCount(0)
    //     }
    // }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div className='LearnUseLayoutEffect'>
            <h1>{count}</h1>

            <button onClick={handleRun}>Add</button>
        </div>
    )
}

export default LearnUseLayoutEffect;