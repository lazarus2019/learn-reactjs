## NPM, NPX và YARN

## NPM
### 1. Project scope
#### Cài đặt thư viện
```
npm install [lib1_name] [lib2_name] ... => dependencies
npm install react react-dom
=> shorthand: npm i react react-dom 

npm install --save-dev react react-dom => devDependencies
=> shorthand: npm i -D react react-dom
```
#### Gỡ thư viện
```
npm uninstall react react-dom
```
#### Update thư viện


### 2. Global scope (Dự án không phụ thuộc vào thư viện đó)
#### Cài đặt thư viện
```
npm i --global create-react-app
=> shorthand: npm i -g create-react-app
```
##### Gỡ thư viện
```
npm uninstall -g create-react-app
```

## NPX
- Khi cài dặt Node => Đồng thời được cài luôn NPM, NPX
- NPX hỗ trợ thực thi các thư viện mà có cung cấp file Bin
### Tại sao dùng NPX?
- Không phải cài các thư viện lên máy (không phải thư viện nào cũng cần cài vào một dự án cụ thể)
- Luôn sử dụng phiên bản mới nhất (thời gian tải về nhanh)

### Gặp lỗi khi: npx create-react-app
- Sửa lại tên thư mục KHÔNG có dấu, KHÔNG viết cách nhau
- Cài thư viện global
## YARN & NPM
link: https://www.sitepoint.com/yarn-vs-npm/
#### Giống nhau:
- Đều là quản lý gói của code, những thư viện viết bởi JS
#### Khác nhau:
```
NPM|2010:
    - Cung cấp website để quản lý thư viện (https://www.npmjs.com/)
    - Kho lưu trữ thư viện (có thể tự code thư viện và đẩy lên đây)
    - Tương tác npm qua terminal (command-line interface aka CLI)
    - Cài nhiều thư viện cùng lúc: tuần tự
    ...
```
```
YARN|2016|Facebook (Yet Another Resource Negotiator - trình quản lý gói khác):
    - Cải thiện khả năng thực thi, bảo mật của NPM
    - Cài nhiều thư viện cùng lúc: song song => Tốn băng thông
    - Lưu trữ cache, giúp reinstall nhanh hơn => Tốn dung lượng lưu trữ
    ...
```
## YARN install
```
npm i -g yarn
```
## Lưu ý:
### 1. Luôn bật development server (npm start || yarn start)
### 2. Cài lại thư viện khi node_modules bị lỗi 
Đảm bảo tất cả library đều được lưu trong ...-lock.json và chạy lệnh sau
```
npm i
yarn
```