# useContext
Open File LearnUseContext [Here](../4_React_project/tiktok/src/components/LearnUseContext/LearnUseContext.js) 

Open File useContext + useReducer (Make global state) [Here](../4_React_project/tiktok/src/components/UseContextNUseReducer/UseContextNUseReducer.js) 

## Tính năng
\- Chia sẽ state tới những component khác để sử dụng mà không cần phải truyền từ component cha xuống component con

## Cú pháp
```jsx
// Khởi tạo Context
const FooContext = React.createContext()

function myFoo(){
    function FooDisplay(){
        // Sử dụng context từ FooContext
        const foo = React.useContext(FooContext)
        return <div>Foo is: {foo}</div>
    }
    
    return (
        // Bao Provider context xung quanh component cần nhận prop
        // value: Giá trị của prop
        <FooContext.Provider value='I am Foo'>
            <FooDisplay />
        </FooContext.Provider>
    )
}
```

## Redux và React-context
\- Ưu điểm của Redux so với React-context
1. Debugging capabilities
> Dễ dàng debug hơn vì có thư viện React-debug từng element dễ quan sát state thay đổi
2. Middleware
> Kiến trúc sẵn sàng apply Middleware
3. Addons and extensibility
> Dễ dàng mở rộng
4. Cross-platform and cross-framework usage
> Đa nền tảng, có thể sử dụng tất cả các sự án sử dụng Javascript mà không phụ thuộc vào Framework React
5. Depending on your app's setup, much better performance than working with just Context
> Dễ dàng cấu hình cho tự án và khả năng performance tốt hơn React-context => state component thay đổi => chỉ render lại component đó

## Sử dụng React-context khi nào
\- Ứng dụng vừa và nhỏ
\- Tỷ lệ set lại state không nhiều (theme light/dark,...) => global state