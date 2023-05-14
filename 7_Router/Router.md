# Router

Open File LearnRouter [Here](../4_React_project/tiktok/src/components/LearnRouter/index.js)

React Router V6 Docs [Here](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

React Router V5 Docs [Here](https://v5.reactrouter.com/web/guides/quick-start)

## Tính năng

\- Tạo bộ định tuyến nội bộ giúp di chuyển qua các element

## Cài đặt

**NPM: npm i react-router-dom**

**YARN: yarn add react-router-dom**

## Cú pháp cấu hình nhanh Router

\- Toàn app chỉ sử dụng 1 Router

\- Bao toàn bộ app bởi BrowserRouter

```jsx
// index.js
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.js
import { Routes, Route, Link, NavLink } from "react-router-dom";

return (
  <>
    <header>
      <navbar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Book List</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </navbar>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<BookDetails />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* Authorization */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Protected */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  </>
);

// AuthLayout
import { Outlet } from "react-router-dom";

return (
  <>
    <img src='../assets/logo.png' />
    <h1>Login/Signup</h1>

    {/* Child element will render here*/}
    <Outlet />
  </i>
);
```

## Router types (https://www.youtube.com/watch?v=Ul3y1LXxzdU)

### BrowserRouter

\- URL hiển thị `http://localhost:3000/books`

\- Sử dụng History API trong HTML5 để theo dõi lịch sử route

### HashRouter

\- URL hiển thị `http://localhost:3000/#/books`

\- Sử dụng hash của URL (window.location.hash) để ghi nhớ lịch sử route

> HashRouter sẽ tạo ra các đường dẫn mà path của nó không ảnh hưởng tới route hiện tại của website, được sử dụng trong trường hợp chia sẽ domain với nhau

### HistoryRouter (unstable_HistoryRouter)

### MemoryRouter

\- URL hiển thị KHÔNG THAY ĐỔI `http://localhost:3000/`

\- Lưu lịch sử route trong bộ nhớ của website

> MemoryRouter không kết nối tới browser và không làm browser bị break nên thường được sử dụng khi testing

### Routes, Route

\- Routes: Bao các route lại thành 1 khối, có thể sử dụng để nest các route lại với nhau

\- Route: Định nghĩa một ánh xạ (mapping) giữa 1 URL với một Element để render ra giao diện

```jsx
// Cú pháp
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path='/home' element={<Home />} exact />
  {/*
    path: đường dẫn trên URL
    exact: chỉ hoạt động với giá trị tuyệt đối của path
    element: Element tương ứng được render ra giao diện
  */}
  <Routes>
```

\- **Not Found route**

```jsx
<Route path='*' element={<NotFound />}>
```

\- **Nested Routes:** Gom các route lại thành 1 khối và sử dụng Outlet để đặt vị trí hiện các element con bên trong layout (nếu có)

```jsx
<Route path="/books" element={<BookLayout />}>
  <Route index element={<BookList />} />
  <Route path=":id" element={<Book />} />
  <Route path="new" element={<NewBook />} />
</Route>;

// BookLayout.js
import { Outlet } from "react-router-dom";

return (
  <>
    <h1>Header</h1>
    <Outlet />
  </>
);
```

\- Truyền dữ liệu vào Outlet

```jsx
// BookLayout.js
import { Outlet } from "react-router-dom";

return (
  <>
    <h1>Header</h1>
    <Outlet context={{hello: 'World'}} />
  </>
);

// BookList.js
import {useOutletContext} from 'react-router-dom'

export default const BookList = () =>{
  const obj = useOutletContext()
  const hello = obj.hello
}
```

\- Tách routes cùng path thành 1 element riêng biệt: Đặt thêm dấu _ đằng sau path gốc (VD: /books/_)

```jsx
// App.js
<Route path='/books/*' element={<BookRoutes />} />

// BookRoutes.js

return (
  <Routes>
  {/*KHÔNG cần dùng context và useOutletContext để truyền/nhận data*/}
    <BookLayout>
      <Route index element={<BookList />} />
      <Route path=":id" element={<Book />} />
      <Route path="new" element={<NewBook />} />
    </BookLayout>

    {/*Sử dụng Route thì vẫn phải dùng useOutletContext để nhận data*/}
    <Route element={<BookLayout />}>
      {/*...*/}
    </Route>
  <Routes>
)
```
### Sử dụng useRoutes để tạo router


### Link

###
