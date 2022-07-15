# useRef
Open File LearnUseRef [Here](../4_React_project/tiktok/src/components/LearnUseRef.js) 

## Tại sao phải dùng useRef
\- Khởi tạo biến bên trong function component thì khi render lại component sẽ tạo 1 giá trị mới mà không giữ được giá trị đã lưu trước đó

\- Định nghĩa biến liên quan trực tiếp đến logic bên trong function component nên được để bên trong

=> useRef sinh ra để giải quyết các vấn đề trên

## Chức năng
\- Lưu các giá trị qua một tham chiếu bên ngoài `function component` 
>Giữ lại giá trị lưu trước đó khi render lại function component

\- Truy cập node DOM cụ thể sau khi component render xong

## Cú pháp
### Lưu giá trị
```jsx
const timerId = useRef(initialValue) => Object
// Lấy giá trị hiện tại của ref
timerId.current 

// Sửa giá trị cho ref
timerId.current = any

// InitialValue chỉ sử dụng cho lần gán đầu tiên khi mounted, mặc định là undefined
```

### Truy cập DOM element với property ref
```jsx
const h1Ref = useRef()

// Sử dụng useEffect để lấy node H1 sau khi UI được render xong
useEffect(()=>{
    console.log(h1Ref.current) // <h1>Heading 1</h1>
})
...
return (
    ...
    // Khai báo node cần được map với h1Ref
    <h1 ref={h1Ref}>Heading 1</h1>
    ...
)
```