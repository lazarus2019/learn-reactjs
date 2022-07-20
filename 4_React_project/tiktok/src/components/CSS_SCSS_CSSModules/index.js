import CSS_Module from './CSS_style/CSS_module'
import CSS_Library_CLSX from './CSS_style/CSS_Library_CLSX'
import CSS_Library_classnames from './CSS_style/CSS_Library_classnames'
import GlobalStyles from './CSS_style/GlobalStyles'

function CSS_SCSS_CSSModule() {

    return (
        <div className='CSS_SCSS_CSSModule'>
            <CSS_Module />
            <CSS_Library_CLSX />
            <CSS_Library_classnames />

            <GlobalStyles>
                <span>This is span</span>
                <h3>Heading 3</h3>
            </GlobalStyles>
        </div>
    )
}

export default CSS_SCSS_CSSModule