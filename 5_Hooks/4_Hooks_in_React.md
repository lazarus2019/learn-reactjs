## Hook trong React - Gắn (gắn vào component)
<hr>
Hook được thêm vào React từ phiên bản 16.8.0

Hook là những `methods, hàm` được viết sẵn của ReactJS

```javascript
import{
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandle,
    useDebugValue
} from 'react'

// Chỉ cần quan tâm: đầu vào, đầu ra, cách vận hành
```

```javascript
// Chưa dùng Hooks, chỉ là UI component
function ComponentA(){
    return <h1>Haven't used hooks yet</h1>
}

// Sử dụng Hooks, hỗ trợ thêm nhiều tính năng
function ComponentB(){
    // useState
    const [state, setState] = useState(initState)

    // useEffect
    useEffect(()=>{

    }, [deps])

    // useLayoutEffect
    useLayoutEffect(()=>{

    }, [deps])

    // useRef
    const ref = useRef()

    // useCallback
    const fn = useCallback(()=>{

    }, [deps])

    // useMemo
    const result = useMemo(()=>{
        // return results for memo
    }, [deps])

    // useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init)

    // useContext
    const value = useContext(MyContext)

    // useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    // useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline')

    return <h1>Hooks</h1>
}
```

1. Chỉ dùng cho function component
2. Component đơn giản và trở nên dễ hiểu (cú pháp)
    - Không bị chia logic ra như methods trong `lifecycle` của Class Component
    > lifecycle: vòng đời component từ lúc thêm vào DOM, hoạt động, thay đổi dữ liệu đến khi bị gỡ khỏi DOM
    - Viết logic xảy ra ở khác thời điểm nhưng ở ngay bên cạnh nhau
    - Không cần sử dụng "this"
3. Sử dụng Hooks khi nào?
    - Dự án mới => Hooks
    - Dự án cũ
        - Component mới => Function component + Hooks
        - Component cũ => Giữ nguyên, có thời gian tối ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất của OOP/kế thừa => Class component
4. Người mới nên bắt đầu với Function hay Class component?
=> Function component + Hooks
5. Có kết hợp sử dụng Function component & Class component được không?
    - Được

```javascript
// Function component
function Item({children}){
    return <li>{children}</li>
}

// Class component
class List extends React.Component{
    render(){
        return (
            <ul>
            <Item>HTML, CSS</Item>
            <Item>Javascript</Item>
            <Item>ReactJS</Item>
            </ul>
        )
    }
}
//=> Và ngược lại cũng vậy
```