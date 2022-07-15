# useMemo
Open File LearnUseMemo [Here](../4_React_project/tiktok/src/components/LearnUseMemo.js)

## Tính năng
\- Hạn chế việc thực hiện lại `logic` khi không cần thiết

VD khi không dùng useMemo
```jsx
function App(){
    const [number, setNumber] = React.useState('')
    const [numbers, setNumbers] = React.useState([])

    const handleAdd = () =>{
        setNumbers([...numbers,
            +number
        ])
    }

    const total = numbers.reduce((result, num) => {
        console.log('Calculating...') // Luôn được thực thi mỗi lần re-render
        return result + num
    }, 0)

    return (
        <>
            <input 
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <br/>
            <button onClick={handleAdd}>Add</button>
            <br/>
            Total: {total}
        </>
    )
}
```

## Cú pháp
```jsx
useMemo(callback, [deps])

// callback và deps là 2 tham số bắt buộc phải nhập
// Khi giá trị của deps thay đổi => thực thi logic trong callback

// Sửa lại trường hợp Code VD phía trên:
...
    const total = React.useMemo(() => {
        numbers.reduce((result, num) => {
            console.log('Calculating...') // Luôn được thực thi mỗi lần re-render
            return result + num
        }, 0), [numbers]
    })
...
```