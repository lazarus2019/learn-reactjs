# Mounted & Unmounted

## Mounted
- Là thời điểm đưa Component vào sử dụng (trước khi Component được render)

## Unmounted
- Là thời điểm gỡ Component ra không sử dụng nữa

## Code Example
```jsx
// Content.js
function Content(){
    return (
        <h1>Welcome Home!</h1>
    )
}

export default Content;

// App.js
...
import Content from './Content'

function App(){
    ...
    const [show, setShow] = useState(false)
    return (
        ...
        <div style={{padding: 30}}>
            <button onClick={()=> setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
        ...
    )
}
```