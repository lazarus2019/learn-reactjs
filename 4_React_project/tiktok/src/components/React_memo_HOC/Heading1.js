import {memo} from 'react'

function Heading1({ count }) {
    console.log('re-render')
    return (
        <h1>HELLO ANH EM! {count}</h1>
    )
}

// Sử dụng memo để hạn chế việc re-render
export default memo(Heading1);