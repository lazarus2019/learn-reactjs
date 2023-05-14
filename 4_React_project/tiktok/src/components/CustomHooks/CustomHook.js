import {useState, useEffect, useRef} from 'react'

// function useLocalStorageState(key, defaultValue = '') {
//     const [state, setState] = useState(
//         () => window.localStorage.getItem(key) || defaultValue,
//     )

//     useEffect(() => {
//         window.localStorage.setItem(key, state)
//     }, [key, state])

//     return [state, setState]
// }

function useLocalStorageState(
    key,
    defaultValue = '',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {},
  ) {
    const [state, setState] = useState(() => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        try {
          return deserialize(valueInLocalStorage)
        } catch (error) {
          window.localStorage.removeItem(key)
        }
      }
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    })
  
    const prevKeyRef = useRef(key)

    useEffect(() => {
      const prevKey = prevKeyRef.current
      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey)
      }
      prevKeyRef.current = key
      window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize])
  
    return [state, setState]
  }

function CustomHook({initialName = ''}) {
    const [name, setName] = useLocalStorageState('name', initialName)

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

export default CustomHook;