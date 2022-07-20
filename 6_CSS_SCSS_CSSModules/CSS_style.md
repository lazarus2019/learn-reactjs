# CSS Style
Open File CSS_SCSS_CSSModule [Here](../4_React_project/tiktok/src/components/CSS_SCSS_CSSModule/index.js)

## CSS raw
\- Style trực tiếp lên element
```jsx
<div style={{
    padding: 20,
    color: 'green'
}}>THIS IS CONTENT</div>
```

\- Style qua class selector
```jsx
// App.css
.heading{
    color: green;
}

// App.js
<div className='heading'>THIS IS CONTENT</div>
```

## CSS Module (Chỉ xài cho class selector)
\- Sửa tên file CSS sang kiểu module (webpack đã hỗ trợ sẵn)
```jsx
Paragraph.css => Paragraph.module.css
```
\- File CSS module sẽ được xử lý => export ra 1 object bao gồm các phần tử className và tên className mới được generate từ module

\- Tên className mới được định nghĩa như sau: TenFile_ClassName__hash
> VD: Tên file là Paragraph.module.css và có sử dụng class heading => Paragraph_heading__1kGV-

\- Cú pháp sử dụng và import CSS Module
```jsx
import styles from './Paragraph.module.css'
// styles là đối tượng chứa className và tên class được tự động generate

return (
    // Thêm class mới vào element
    <div className={styles.heading}>THIS IS CONTENT</div>

    // Thêm nhiều class với string template
    <div className={`${styles.heading} ${styles.mainHeading}`}>THIS IS CONTENT 2</div>

    // Thêm nhiều class với method join
    <div className={[styles.heading, styles,mainHeading].join(' ')}>THIS IS CONTENT 2</div>

)
```
### Lưu ý: CSS Module chỉ hỗ trợ class và không có tính kế thừa

## CSS Library
[So sánh độ phổ biến giữa thư viện CLSX và classnames](https://npmtrends.com/classnames-vs-clsx)

### CLSX
[Package CLSX](https://www.npmjs.com/package/clsx)

#### Cài đặt
**NPM: npm i clsx**

**YARN: yarn add clsx**

#### Sử dụng
```jsx
import clsx from 'clsx'

// Truyền tham số là các className vào hàm clsx
<div className={clsx(styles.heading, styles.mainHeading)}>THIS IS CONTENT</div>

// Thêm logic true/false để xác định có thêm className hay không
// Đặt tham số object vào vị trí đầu/sau cùng trong hàm clsx
<div className={clsx(styles.heading, {
    [styles.mainHeading]: true,
    [styles.dFlex]: false,
    'blue-heading': false,
    active: true // Thêm class active vào element
})}>THIS IS CONTENT</div>

// Có thể tách làm object riêng rồi truyền vào className
const headingClasses = clsx({
    [styles.primary]: true,
    [styles.bigBtn]: false
})
<div className={headingClasses}>THIS IS CONTENT</div>

// Sử dụng kết hợp với checking prop
// App.js
<>
    <BigButton primary />
    <BigButton warning />
</>

function BigButton({primary, warning}){

    const buttonClasses = clsx({
        [styles.primary]: primary,
        [styles.warning]: warning
    })

    return (
        <button className={buttonClasses}>Click me!</button>
    )
}
```

### classnames
[Package classnames](https://www.npmjs.com/package/classnames)

#### Cài đặt
**NPM: npm i classnames**

**YARN: yarn add classnames**

**BOWER: bowser install classnames**

#### Sử dụng
```jsx
import classnames from 'classnames'

// Truyền tham số vào hàm classNames
<button className={classnames({
    'foo',
    {'btn-primary': true},
    {'bar': false}
})}>
    Click me!
</button>

// Sử dụng biến bên ngoài
let buttonType = 'primary'; 
let buttonClasses = classnames({ [`btn-${buttonType}`]: true });

<button className={buttonClasses}>Click me!</button>
```

## SCSS
[Học SASS](https://sass-lang.com/documentation/values)

[Học SASS - freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/#sass)

\- Cài đặt library SASS để hỗ trợ SCSS

**NPM: npm i sass**

**YARN: yarn add sass**

## CSS Global
\- Tạo component có import global style và bao trọn component cần sử dụng

```jsx
// GlobalStyles.js
import './GlobalStyles.css'

function GlobalStyles({children}){
    return children
}
export default GlobalStyles

// App.js
import GlobalStyles from './GlobalStyles.js'
...
    return (
        <div className='App'>
            <GlobalStyles>
                <Heading />
                <Paragraph />
            <GlobalStyles/>
        </div>
    )
...
```