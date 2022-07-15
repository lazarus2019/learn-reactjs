import { memo } from "react"

function Content2({ onIncrease2 }) {
    console.log('re-render 2')
    return (
        <>
            <h1>Content component</h1>
            <button onClick={onIncrease2}>Increase (Count 2)</button>
        </>
    )
}

export default memo(Content2)