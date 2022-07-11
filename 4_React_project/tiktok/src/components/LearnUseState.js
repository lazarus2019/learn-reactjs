import { useState } from 'react'

const orders = [100, 50, 20]
function LearnUseState() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)

    console.log(total)
    return total
  })

  const handleIncrease = () => {
    setCounter(counter + 1) // Gọi lại hàm App khi hàm set được thực thi
    setCounter(counter + 1)
    setCounter(counter + 1)
    // Chỉ render lại 1 lần dù gọi hàm set nhiều đến đâu => do kiến trúc lên lịch trình

    // Sử dụng callback để gán lại giá trị mới cho state
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
  }

  // Set state là thay thế state bằng giá trị mới
  const [info, setInfo] = useState({
    name: 'Lazarus',
    age: 28
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      hobby: 'travel'
    })

    // Hoặc sử dụng callback để thêm logic vào giá trị trả về
    setInfo(preState => {

      // logic

      return {
        ...preState,
        hobby: 'travel'
      }
    })
  }

  return (
    <div className="LearnUseState" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleUpdate}>Updated</button>
    </div>
  );
}

export default LearnUseState;