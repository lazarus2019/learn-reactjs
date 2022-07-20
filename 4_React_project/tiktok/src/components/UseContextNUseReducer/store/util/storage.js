const TODOS_KEY = 'todos_key'

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_KEY)) || []
    },
    set(todos){
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
    }
}