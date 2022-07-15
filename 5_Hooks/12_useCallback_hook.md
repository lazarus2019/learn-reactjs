# useCallback hook
Open File LearnUseCallback [Here](../4_React_project/tiktok/src/components/LearnUseCallback/LearnUseCallback.js)

## Tại sao phải dùng
\- Function từ component cha truyền vào con thực chất chỉ là tham chiếu của hàm đó

\- Khi được render lại => function được khai báo lại trong phạm vi mới và được lưu vào tham chiếu mới

\- Do tính chất so sánh `===` (strict equality) của React.memo nên khi thấy 2 tham chiếu của hàm đã lưu và hàm mới tạo khác nhau => render lại component đã memo

Code VD khi không dùng useCallback:
```jsx
// Content.js
function Content({ onIncrease }){
    console.log('re-render') // Luôn thực thi vì tham chiếu của prop thay đổi
    return (
        <>
            <h1>Content component</h1>
            <button onClick={onIncrease}>Increase</button>
        </>
    )
}

export default React.memo(Content)

// App.js
import Content from 'Content'

function App(){
    const [count, setCount] = React.useState(0)

    // Mỗi lần render lại handleIncrease sẽ được tạo với 1 tham chiếu mới
    const handleIncrease = () =>{
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            {/* Tham chiếu của hàm liên tục được thay đổi mỗi lần re-render */}
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </>
    )
}
```

## Tính năng
\- Tránh tạo ra hàm mới bên trong component một cách không cần thiết (không kiểm soát)
- deps không thay đổi: Trả về tham chiếu của callback trước đó
- deps thay đổi: Trả về callback mới với tham chiếu mới

## Cú pháp
```jsx
useCallback(callback, [deps])

// Sửa lại trường hợp Code VD phía trên:
...
    const handleIncrease = React.useCallback(() =>{
        setCount(prevCount => prevCount + 1)
    }, []) //=> Mặc định deps = [] nên khi re-render không khởi tạo hàm mới
...
```

## Chú ý: useCallback và React.memo là đôi bạn cùng tiến
\- Nếu đã sử dụng React.memo cho các props con của component thì phải sử dụng useCallback để xử lý các function (nếu có) truyền vào component con

\- Không dùng React.memo thì tuyệt đối không dùng useCallback vì nó không mang lại điều gì cả