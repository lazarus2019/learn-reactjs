import clsx from 'clsx'

import styles from './Paragraph.module.css'
// Sử dụng module để tạo ra các file css độc lập (React tự động generate lại class của file CSS) => class không bị trùng nhau
console.log(styles)

function Paragraph({disabled}){

    const paragraphClasses = clsx(styles.paragraph, {
        [styles.disabled]: disabled
    })

    return (
        // Sử dụng thuộc tính từ CSS module để gán cho các element
        <p className={paragraphClasses}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    )
}

export default Paragraph