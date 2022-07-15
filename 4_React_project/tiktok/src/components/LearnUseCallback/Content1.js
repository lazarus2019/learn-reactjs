import { memo } from "react"

function Content1({ onIncrease1 }) {
    console.log('re-render 1') // Luôn được thực thi
    return (
        <>
            <h1>Content component</h1>
            <button onClick={onIncrease1}>Increase (Count 1)</button>
        </>
    )
}

export default memo(Content1)