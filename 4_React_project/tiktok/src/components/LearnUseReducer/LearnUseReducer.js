import { useReducer } from 'react'

/* Quy trình sử dụng useState và useReducer */
// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer: Luôn trả về 1 state mới và bảo lưu kiểu dữ liệu từ state cũ
const reducer = (state, action) => {
    console.log('reducer running...')
    // State được thay đổi dựa vào action được truyền vào
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid value...')
    }
}

function LearnUseReducer() {
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div className='LearnUseReducer'>
            <h1>{count}</h1>

            <button
                // Kích hoạt action tương ứng cho reducer
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>

            <button
                // Kích hoạt action tương ứng cho reducer
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>

        </div>
    )
}

export default LearnUseReducer;