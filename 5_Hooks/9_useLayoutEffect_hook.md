# useLayoutEffect
Open File LearnUseLayoutEffect [Here](../4_React_project/tiktok/src/components/LearnUseLayoutEffect.js) 

## useEffect & useLayoutEffect
\- Trình tự thực thi của useEffect
- 1. Cập nhật lại state
- 2. Cập nhật DOM (mutated(đột biến): cập nhật lại prop trong node)
- 3. Render lại UI
- 4. Gọi clearnup nếu deps thay đổi
- 5. Gọi useEffect callback

\- Trình tự thực thi của useLayoutEffect
- 1. Cập nhật lại state
- 2. Cập nhật lại DOM (mutated)
- 3. Gọi cleanup nếu deps thay đổi (sync)
- 4. Gọi useLayoutEffect callback (sync)
- 5. Render lại UI

## Tại sao phải dùng useLayoutEffect thay cho useEffect
\- Vì tính chất chờ UI render của useEffect xong thì clearnup và callback mới bắt đầu chạy => Đôi khi dữ liệu lỗi bị in ra trước khi kịp check trong callback

=> useLayoutEffect ra đời để xử lý tình huống đó => Dừng render UI => chạy cleanup và callback nếu deps thay đổi => update state & DOM => Dừng render UI => lúc này deps không thay đổi => Bỏ qua cleanup và callback => Render UI

## Khi nào dùng useLayoutEffect
\- set lại State => check state trong useEffect => set lại chính nó (state) bằng 1 giá trị khác

```jsx
// Code ví dụ

useEffect(()=>{
    if(count > 3)
        setCount(0)
}, [count])

const handleRun = () => {
    setCount(count + 1)
}

//=> Thay useEffect thành useLayoutEffect
```
