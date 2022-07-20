import { useContext } from 'react'

import Content from "./Content";
import { ThemeContext } from './ThemeContext'
// Theme Dark / Light

// 1. Create context
// 2. Provider
// 3. Consumer (phải lấy được Context của provider)

function LearnUseContext() {
    const context = useContext(ThemeContext)

    return (  
        <div className='LearnUseContext'>
            <button onClick={context.toggleTheme}>Toggle</button>
            <Content />
        </div>
    )
}

export default LearnUseContext