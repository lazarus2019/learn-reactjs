import React, { useEffect, useState } from 'react'

// 1. useEffect(callback) 
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// ----------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
function LearnUseEffectP3() {
    const [show, setShow] = useState(false)
    const [countdownInterval, setCountdownInterval] = useState(180)

    // DOM timer bị closure
    useEffect(() => {
        const timerId = setInterval(() => {
            // setCountdown(countdownInterval - 1) // 
            // console.log('countdownInterval ', countdownInterval)
            // callback luôn chạy 1 lần khi component mounted
            // SetInterval nằm trong phạm vi chỉ chạy 1 lần => countdownInterval bên trong luôn là 180


            // Xử lý bằng cách dùng callback trong SetInterval (không tham chiếu tới countdownInterval)
            setCountdownInterval(prevState => prevState - 1)
            console.log('countdownInterval ', countdownInterval)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    // Countdown với setTimeout
    const [countdownTimeout, setCountdownTimeout] = useState(180)
    useEffect(() => {
        const timerId = setTimeout(()=>{
            setCountdownTimeout(countdownTimeout - 1)
        }, 1000)

        return () => clearTimeout(timerId)
    }, [countdownTimeout])

    return (
        <div className='LearnUseEffectP3'>
            <h2>DOM event: SetInterval - SetTimeout (Timer)</h2>
            <button
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>

            {show && (
                <React.Fragment>
                    <h1>DOM event: SetInterval</h1>
                    <h2>{countdownInterval}</h2>

                    <h1>DOM event: SetTimeout</h1>
                    <h2>{countdownTimeout}</h2>
                </React.Fragment>
            )}
        </div>
    )
}

export default LearnUseEffectP3;