import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video1.mp4'

function Video(props, ref) {
    // videoRef nằm trong component Video nên có toàn quyền truy cập vào thẻ video
    const videoRef = useRef()

    // ImperativeHandle: Khai báo lại giá trị thuộc tính của ref được public ra bên ngoài
    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    // Callback có thể trả về 1 object
    // Return của callback tương đương với ref được truyền xuống ở component cha

    return (
        <video
            ref={videoRef} // Khi thẻ video được đưa vào DOM => tham chiếu thẻ video tới ref ở component cha
            src={video1}
            width='300'
            {...props}
        />
    )
}

// forwardRef là 1 HOC của react: Giúp get data, thao tác event của component con khi đứng tại component cha
export default forwardRef(Video)
