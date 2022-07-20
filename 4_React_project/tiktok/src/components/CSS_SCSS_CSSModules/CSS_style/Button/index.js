import classnames from 'classnames'

import styles from './Button.module.css'
console.log(styles)

function Button({ danger, primary }) {

    const btnClasses = classnames([
        'foo',
        { 'btn-primary': true },
        { 'bar': false },
        {[styles.danger]: danger},
        {[styles.primary]: primary},
    ])

    return (
        <button className={btnClasses}>Click me!</button>
    )
}

export default Button