# useEffect hook
Open File LearnUseEffect_p1 [Here](../4_React_project/tiktok/src/components/LearnUseEffect_p1.js) 

- Update DOM
- Call API

Open File LearnUseEffect_p2 [Here](../4_React_project/tiktok/src/components/LearnUseEffect_p2.js) 

- Listen DOM events
    - Scroll
    - Resize
- Cleanup
    - Remove listener / Unsubscribe

Open File LearnUseEffect_p3 [Here](../4_React_project/tiktok/src/components/LearnUseEffect_p3.js) 

- Cleanup
    - Clear timer
    - ...

Open File LearnUseEffect_p4 [Here](../4_React_project/tiktok/src/components/LearnUseEffect_p4.js)   

- Preview avatar
- Fake Comment App [Fake Comment Event Interval](../4_React_project/tiktok/src/index.js)


## Dùng khi nào?
\- Thực hiện `side effects` bên cạnh các hoạt động chính của chương trình
> Side effects: khi có tác động xãy ra với chương trình => dữ liệu thay đổi

\- Side effects thường gặp: 
- Update DOM
- Call API
- Listen DOM events
    - Scroll
    - Resize
    - ...
- Cleanup
    - Remove listener / Unsubscribe
    - Clear timer
    - ...


## Tại sao phải dùng
\- Dễ chỉnh sửa vì các hoạt động side effect được bao bởi useEffect

\- Tránh ảnh hưởng tới quá trình ưu tiên `render UI` ra cho người dùng => vì useEffect được thực thi sau khi component mounted

## Cú pháp
```jsx
1. useEffect(callback) 
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// ----------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

```
## Chú ý: Component có thể được mounted và unmounted bởi thao tác người dùng
\- Với các event, timer,... được thêm vào useEffect thì khi component bị unmounted => vẫn lắng nghe và thực hiện => `memory leak`
> memory leak: rò rĩ bộ nhớ, thứ ở trong bộ nhớ mà không sử dụng tới

=> Để xử lý tình trạng trên bằng cách sử dụng `Cleanup function` vì tính chất gọi trước khi component unmounted

### Cú pháp Cleanup function (là funtion được return trong useEffect)
```jsx
    useEffect(() => {
    // Logic events, timer,...
    function handleEvent(){}

    window.addEventListener('event', handleEvent)
     
    // Cleanup function
    return () => {
        window.removeEventListener('event', handleEvent) // Loại bỏ các  events, timer,... sử dụng khi mounted
     }
    })
```

