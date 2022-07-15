import { useState, useMemo, useRef } from 'react'

function LearnUseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = ()=>{
        setProducts([...products, {
            name,
            price: +price
        }])

        // Clear input & focus
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    // Sử dụng useMemo
    const total = useMemo(()=>{
        const result = products.reduce((result, product) => {
            console.log('Tính toán lại...')
            return result + product.price
        }, 0)

        return result
    }, [products]) // Tracking products thay đổi => chạy callback

    return (
        <div className='LearnUseMemo'>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name...'
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder='Enter price...'
                onChange={e => setPrice(e.target.value)}
            />
            <br />

            <button onClick={handleSubmit}>Add</button>
            <br/>
            Total: {total}
            <br/>
            <ul>
                {products.map(prod => (
                    <li key={prod.name}>{prod.name} - {prod.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default LearnUseMemo