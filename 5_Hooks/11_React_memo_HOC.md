# React.memo HOC
Open File ReactMemoHOC [Here](../4_React_project/tiktok/src/components/React_memo_HOC/React_memo_HOC.js)

## Khái niệm & Tính năng
\- React.memo là 1 `HOC` (Highter Order Component) để bao trọn Component khác
> HOC có thể được sử dụng cho functional và class component (tùy vào tính chất)

\- Nhận vào 1 component và trả về 1 memoized component

\- Ghi nhớ lại props của từng component để render lại nếu có ít nhất 1 prop thay đổi nhằm hạn chế việc render khi không cần thiết => tối ưu hiệu năng
> React.memo Tương tự với PureComponent và shouldComponentUpdate ở class component

## Component render khi nào
\- Các nguyên nhân khiến React component bị re-render:
- Props của nó thay đổi
- State bên trong của nó thay đổi
- Sử dụn context value bị thay đổi
- Nó connect tới store có state thay đổi (hay sử dụng useSelector với stateset thay đổi)
- Cha của nó re-render

## Cú pháp
```jsx
    React.memo(YourComponent)
```

VD thực tế:
```jsx
// MyChild.js
function MyChild({darkMode}){
    return (
        <h2>HELLO GUYS! {darkMode}</h2>
    )
}

// Hạn chế render MyChild render lại khi prop darkMode không thay đổi
export default React.memo(MyChild)

// MyParent.js
import MyChild from 'MyChild'

function MyParent(){
    const [darkMode, setDarkMode] = useState(false)
    const [count, setCount] = useState(0)

    return (
        <div>
            <MyChild darkMode={darkMode}/>

            <h2>Dark Mode: {darkMode}</h2>
            <button 
            onClick={() => setDarkMode(!darkMode)}
            >
            Toggle Dark Mode
            </button>

            {/* MyChild chỉ ảnh hưởng bởi prop darkMode, còn lại thì không */}
            <h2>{count}</h2>
            <button 
            onClick={() => setCount(count + 1)}
            >
            Add 1
            </button>
        </div>
    )
}
```