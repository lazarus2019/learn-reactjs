import clsx from 'clsx'
import Paragraph from './Paragraph'

import styles from './Paragraph/Paragraph.module.css'
console.log(styles)

function CSS_Library_CLSX(){
    const buttonClasses = clsx('btn', {
        [styles.mainBackground]: true,
        [styles.paragraph]: false,
        'active': true,        
    })

    return (
        <div className='CSS_Library_CLSX'>
            <Paragraph disabled />

            <p className={clsx(styles.paragraph)}>
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <button className={buttonClasses}>Click me!</button>
        </div>
    )
}

export default CSS_Library_CLSX