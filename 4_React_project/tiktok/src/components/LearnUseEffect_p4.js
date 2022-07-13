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
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted - render lần 1)
function LearnUseEffectP4() {
    const [show, setShow] = useState(false)

    // Kiểm tra tính chất Cleanup func gọi trước khi callback được gọi (trừ lần mounted)
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log(`Mounted or Re-render lần ${count}`)

        // Cleanup func
        return () => {
            console.log(`Cleanup lần ${count}`)
        }
    }, [count])

    // Preview Avatar
    const [avatar, setAvatar] = useState()

    useEffect(() => {

        // Cleanup func
        return () => {
            // Vào lần đầu change file thì useEffect chạy trước nên kiểm tra xem avatar có khác null (giá trị khởi tạo ban đầu) hay không
            avatar && URL.revokeObjectURL(avatar.preview) // Xóa URL tạm của ảnh trong bộ nhớ
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file) // Tạo URL tạm cho file ảnh

        setAvatar(file)
    }

    // Fake Comment App
    const lessons = [
        {
            id: 1,
            name: 'ReactJS là gì? Tại sao nên học ReactJS?'
        },
        {
            id: 2,
            name: 'SPA/MPA là gì?'
        },
        {
            id: 3,
            name: 'Arrow function'
        },
    ]

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }, [lessonId])

    return (
        <div className='LearnUseEffectP4'>
            <h1>Kiểm tra tính chất Cleanup func</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
            <br /><br />
            <button
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>

            {show && (
                <React.Fragment>
                    <h2>Preview Avatar</h2>
                    <input
                        type='file'
                        // Thêm thuộc tính `multiple` để chọn nhiều ảnh
                        onChange={handlePreviewAvatar}
                    />
                    <br />
                    {avatar && (
                        <img src={avatar.preview} alt='' width='50%' />
                    )}

                    <h2>Fake Comment App</h2>
                    <ul>
                        {lessons.map(lesson => (
                            <li
                                key={lesson.id}
                                style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
                                onClick={() => setLessonId(lesson.id)}
                            >{lesson.name}</li>
                        ))}
                    </ul>
                </React.Fragment>
            )}
        </div>
    )
}

export default LearnUseEffectP4;