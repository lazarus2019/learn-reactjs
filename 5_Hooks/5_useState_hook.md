# useState hook
Open file LearnUseState [Here](../4_React_project/tiktok/src/components/LearnUseState.js)

### Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật (render lại theo dữ liệu).

### Cách dùng

```jsx
import {useState} from 'react'

function Component(){
    const [state, setState] = useState(initState)

/*
    initState: giá trị khởi tạo
    state: giá trị lần đầu bằng initState
    setState: hàm set lại state
*/

    ...
}
```

### Lưu tý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback? (khi gọi setState không được cộng dồn)
```jsx
VD: 
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
=> 
setCounter(preCounter => preCounter + 1)
setCounter(preCounter => preCounter + 1)
setCounter(preCounter => preCounter + 1)
```
- Initial state với callback? (cần tính toán để có giá trị khởi tạo)
```jsx
// Initial state chỉ nhận giá trị trả về của func chứ không phải func
const orders = [100, 50, 20]
const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((total, cur) => total + cur)

    console.log(total)
    return total
})
//=> Hạn chế việc tính toán lại giá trị của initial state state thay đổi
```
- Set state là thay thế state bằng giá trị mới