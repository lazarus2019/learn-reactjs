# useReducer hook
Open File LearnUseReducer [Here](../4_React_project/tiktok/src/components/LearnUseReducer/LearnUseReducer.js)
Open File TodoApp [Here](../4_React_project/tiktok/src/components/LearnUseReducer/TodoApp/index.js)

## Khái niệm
\- Cung cấp 1 sự lựa chọn khi sử dụng state trong component

## Khi nào dùng? Tại sao?
### Khi nào dùng?
- Số lượng state trong component nhiều
- state KHÔNG phải kiểu dữ liệu: string, number, boolean, array & object (1 cấp)
- Các state phụ thuộc nhau trong logic

### Tại sao phải dùng?
- Reducer giúp quản lý một số state liên quan tới nhau như một object
- Dễ dàng chia thành từng file để dễ dàng quản lý => số lượng dòng code bên trong component chính ít đi

## Cú pháp

```jsx
const [value, dispatch] = useReducer(reducer, initState); // Type (1)
const [value, dispatch] = useReducer(reducer, initState, init) // Type (2)

// value: Giá trị của state
// initState: Giá trị khởi tạo cho state
// dispatch: Hành động giúp action kích hoạt dẫn đến thay đổi state => re-render
// reducer: Thực thi action do dispatch kích hoạt => thay đổi state cũ
```

## Cơ chế hoạt động
\- Lần đầu render: Nhận giá trị khởi tạo (initState) và gán vào value, hàm reducer khởi tạo nhưng không chạy, dispatch được khởi tạo

\- Nhấn dispatch: Sau khi nhận được action => gọi hàm reducer => truyền state hiện tại và action

\- Reducer thực thi => trả về 1 state mới được thay đổi bởi action

\- Cập nhật lại state với dữ liệu mới => re-render