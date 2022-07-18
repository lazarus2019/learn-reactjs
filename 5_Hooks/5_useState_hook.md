# useState hook
Open file LearnUseState [Here](../4_React_project/tiktok/src/components/LearnUseState.js)

## Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật (render lại theo dữ liệu).

## Cách dùng

```jsx
import {useState} from 'react'

function Component(){
    const [state, setState] = useState(initState)

/*
    initState: giá trị khởi tạo
    state: giá trị lần đầu bằng initState
    setState: hàm set lại state (bất đồng bộ)
*/

    ...
}
```

### setState() API
\- Cú pháp:
- setState(object);            // Type (1)            
- setState(a_function);        // Type (2) 
- setState(object, callback);  // Type (3) 

\- Cơ chế hoạt động
- setState() được gọi => ReactJS sẽ `merge` object được truyền qua hàm với state hiện tại => hàm render() của component sẽ chạy lại => cập nhật UI với state tương ứng
> merge: Giữ nguyên views và chỉ thay đổi giá trị được truyền qua setState

\- Tại sao không thay đổi trực tiếp state?

=> Bởi vì không làm component re-render và thường dẫn đến việc không nhất quán state

#### Các vấn đề thường gặp với setState()
\- Async

Xét code VD sau:

```jsx
// State khởi tạo: { votes: 0 }
this.setState({ votes: 0910 });
console.log(this.state.votes); // 0
```
Theo ReactJS:
- setState() là hàm bất đồng bộ => giá trị `state` ngay lúc đó không thay đổi
- Lúc này setState sẽ tạo 1 `pending state transition` => log trước và để setState() vào event loop

=> Việc truy cập vào state sau khi gọi setState() thì có khả năng sẽ trả về state hiện tại

\- Giải pháp
- Sử dụng callback trong setState()
- async - await
- [UNSAFE] Đặt trong componentWillUpdate() hoặc componentDidUpdate() [Xem chi tiết](https://reactjs.org/docs/react-component.html)

Code VD sử dụng callback:
```jsx
// State khởi tạo: { votes: 0 }
this.setState(
    { votes: 0910 },
    function () { console.log(this.state.votes)}; // 0910
);
// OR
this.setState(
    { votes: 0910 },
    () => console.log(this.state.votes) // 0910
);
```

Code VD sử dụng async - await:
```jsx
async ensureStateUpdate(){
    await this.setState({ votes: 0910 });
    console.log(this.state.votes);
}
```

## Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback? (khi gọi setState không được cộng dồn)
```jsx
VD: 
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
// ReactJS sẽ nhóm các batch gọi setState() (gộp các lần gọi setState() gần nhau) thành một lần cập nhật
// => Thay vì đó thì sẽ truyền vào setState() 1 function
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