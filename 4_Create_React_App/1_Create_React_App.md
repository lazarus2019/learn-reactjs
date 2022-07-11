## Tạo dự án ReactJS với Create React App
```
npx create-react-app [project_name]

command: 
    - yarn start: Bật lên 1 cái server (tương tự live server)
    - yarn build: Build source code thành file tĩnh => deploy lên production cho người dùng cuối
    - yarn test: Chạy test
    - yarn eject: Bung ra các cấu hình của webpack để cấu hình lại (NÊN TRÁNH)

cd [project_name]
yarn start
```
## Tạo dự án ReactJS với Webpack và Babel
link chi tiết: https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html
- npm init
- npm install webpack webpack-cli --save-dev (cài đặt webpack)
- npm install react@17.0.2 react-dom@17.0.2 --save (cài đặt react + react DOM v17)
- npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev (cài đặt babel)
- Tạo file public/index.html => ! => #root
- Tạo file src/index.js
```javascript
import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))
```
- npm install css-loader style-loader --save-dev (cài đặt CSS-loader & Style-loader)
- Tạo webpack.config.js
```javascript
const path = require("path");

module.exports = {
entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
},
module: {
    rules: [
    {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
    },
    {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
    }
    ]
},
// Chứa các plugins sẽ cài đặt trong tương lai
plugins: [
]
};
```
- Tạo file .babelrc
```javascript
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
- Chỉnh sửa file package.json
```javascript
"scripts": {
    ...
    "start": "webpack --mode development --watch",
    "build": "webpack --mode production"
}
```
#Chạy dự án với webpack
- npm start 

#Chạy dự án với Live server
- Thêm thẻ script link tới file build/bundle.js
        <script src="../build/bundle.js"></script>
- Chạy dự án với Live Server

- npm install html-webpack-plugin --save-dev (cài đặt html-webpack-plugin phải thêm cập nhật file bundle.js)
- Chỉnh sửa file webpack.config.js
```javascript
...
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
...
// Chứa các plugins sẽ cài đặt trong tương lai
plugins: [
    new HtmlWebpackPlugin({
    template: "./public/index.html"
    })
]
};
```
- npm install webpack-dev-server --save-dev (cài đặt webpack-dev-server để thay thế live server)
- Chỉnh sửa package.json
```javascript
"scripts": {
    ...
    "start": "webpack-dev-server --mode development --open --hot",
    ...
}
```
- npm start (Chạy lại server)
