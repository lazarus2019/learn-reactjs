import { useEffect, useState } from 'react'

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
function LearnUseEffectP2() {
    const [show, setShow] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    // DOM event: Scroll
    const [showGoTop, setShowToTop] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowToTop(true)
            } else {
                setShowToTop(false)
            }

            // shortway: setShowToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        // Sử dụng Clean function loại bỏ event khi bị unmounted => tránh bị memory leak
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // DOM event: Resize
    const [size, setSize] = useState(window.innerWidth)

    useEffect(()=>{

        const handleResize = ()=>{
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='LearnUseEffectP2'>
            
            <h2>DOM event: Resize</h2>
            <h3>{size}</h3>

            <h2>DOM event: Scroll</h2>
            <button
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>

            {showGoTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>
            )}

            {show &&
                (<ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>)
            }
        </div>
    )
}

export default LearnUseEffectP2;