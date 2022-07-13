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

function LearnUseEffectP1() {
    const [title, setTitle] = useState('')

    // Update DOM với useEffect(callback) 
    useEffect(() => {
        // Tôi luôn được gọi khi component mounted
        console.log('Mounted')
        // Callback của useEffect sẽ đợi UI render rồi mới thực thi => 'render' => 'Mounted'

        // Updated DOM title
        document.title = title
    })

    // Call API với useEffect(callback, [])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users)
            })
        /*
            Lưu ý:
                - Fetch chỉ chạy 1 lần khi component mounted (useEffect(callback, []))
                - Nếu sử dụng fetch với useEffect(callback) => call API liên tục vì khi setUsers => component được re-render lại
        */
    }, [])

    // Call API với useEffect(callback, [deps])
    const tabs = ['posts', 'comments', 'albums', 'todos', 'users']
    const [quantity, setQuantity] = useState(0)
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                // console.log(posts)
                setPosts(posts)
                setQuantity(posts.length)
            })
    }, [type]) // Tracking type và khi so sánh (===) type thay đổi => gọi callback 1 lần

    return (
        <div className='LearnUseEffectP1'>
            <h2>Update DOM với useEffect(callback)</h2>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {console.log('render') /* Luôn thực hiện trước callback useEffect */}



            <h2>Call API với useEffect(callback, [])</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>




            <h2>Call API với useEffect(callback, [deps])</h2>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#eee',
                        backgroundColor: '#000'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <p>{`Contains: ${quantity} ${type}`}</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default LearnUseEffectP1;