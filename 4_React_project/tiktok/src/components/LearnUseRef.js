import { useRef, useState, useEffect } from 'react'

function LearnUseRef() {
    const [count, setCount] = useState(60)

    // Khai báo biến để chuẩn bị sử dụng cho lần re-render sau
    const timerId = useRef()
    const prevCount = useRef()

    // Set element trong DOM
    const h1Ref = useRef()

    console.log(timerId.current)

    // Lấy giá trị trước đó của state
    useEffect(() => {
        prevCount.current = count
    }, [count])

    // Lấy DOM element sau khi component render xong
    useEffect(() => {
        console.log(h1Ref.current)

        const rect = h1Ref.current.getBoundingClientRect() // Lấy tọa độ element
        console.log(rect)
    })

    // Lưu lại giá trị vào tham chiếu bên ngoài function component
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start -> ', timerId.current)
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop -> ', timerId.current)
    }

    console.log(count, prevCount.current)

    return (
        <div className="LearnUseRef" style={{ padding: 20 }}>
            {/* Sử dụng thẻ ref để map với useRef */}
            <h1 ref={h1Ref}>{count}</h1>

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default LearnUseRef;