# useImperativeHandle
Open File LearnUseImperativeHandle [Here](../4_React_project/tiktok/src/components/LearnUseImperativeHandle/LearnUseImperativeHandle.js)


## Tính năng
\- Thể hiện tính private (đóng gói) thuộc tính của Component

\- Bằng cách tùy chỉnh giá trị ref được hiển thị trên bản tham chiếu với các thành phần mẹ khi sử dụng ref
> Thay vì public tất cả thuộc tính của ref ra bên ngoài thì có thể tùy chọn 1 vài thuộc tính nhất định (còn lại là private)

\- Và thay thế các chức năng gốc (blur, focus,...) bằng cách chức năng riêng

## Cú pháp
```jsx
React.useImperativeHandle(ref, ()=>({
    // Your public properties declare here...
}))

// ref: Là ref được truyền từ component cha
// Callback có thể trả về 1 object
// Return của callback tương đương với ref được truyền xuống ở component cha
```

## useImperativeHandle thường đi chung với forwardRef
\- forwardRef là 1 HOC của react => phải bọc xung quanh component
>  forwardRef: Giúp get data, thao tác event của component con khi đứng tại component cha (bằng cách truyền biến ref)

Code VD: hiển thị thuộc tính someExposedProperty trên tham chiếu của nó (tất cả thuộc tính khác không có quyền truy cập)
```jsx
// index.js
import { useRef } from 'react'
import Button from "./Button";
import "./styles.css";
 
function App() {
  const buttonRef = useRef(null);
 
  const handleClick = () => {
    console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
    console.log("click in index.tsx");
    buttonRef.current.someExposedProperty();
  };
 
  return (
    <div>
    {/* Truyền ref xuống component con */}
      <Button onClick={handleClick} ref={buttonRef} />
    </div>
  );
}

// Button.js
import { useRef, useImperativeHandle, forwardRef } from "react";
 
function Button(props, ref) { // Nhận ref từ component cha
  const buttonRef = useRef();

// Sử dụng ref từ component cha để xác định tham chiếu nào sẽ nhận ref từ component con
  useImperativeHandle(ref, () => ({

    // Khai báo các thuộc tính mà ref trong component cha được sử dụng
    someExposedProperty: () => {
      console.log(`we're inside the exposed property function!`);
    }
    
  }));
    // Return của callback tương đương với ref được truyền xuống ở component cha

  return (
    <button ref={buttonRef} {...props}>
      Button
    </button>
  );
}
 
export default forwardRef(Button) // Bọc Button trong forwardRef để truyền biến ref thông qua component con
```