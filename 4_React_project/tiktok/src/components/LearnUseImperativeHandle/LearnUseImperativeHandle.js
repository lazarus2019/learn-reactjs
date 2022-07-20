import { useRef } from 'react'

import Video from './Video'

function LearnUseImperativeHandle() {
    const videoRef = useRef()


    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div className='LearnUseImperativeHandle' style={{ padding: 20 }}>
            <Video
                ref={videoRef} // Prop ref không tự động truyền xuống dưới component con mà phải thông qua forwardRef
            />

            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default LearnUseImperativeHandle