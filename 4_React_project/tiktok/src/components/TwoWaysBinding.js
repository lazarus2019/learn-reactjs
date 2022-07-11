import { useState } from 'react'

// Bài tập Radio
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'NodeJS'
    },
    {
        id: 4,
        name: 'ReactJS'
    }
]

function TwoWaysBinding() {
    // Bài tập INPUT
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleSubmitInput = () => {
        console.log({ name, email })
    }

    // Bài tập RADIO
    const [radioChecked, setRadioChecked] = useState()

    const handleSubmitRadio = () => {
        console.log({ id: radioChecked })
    }

    // Bài tập CHECKBOX
    const [checkBoxChecked, setCheckboxChecked] = useState([])

    const handleCheckBox = (id) => {
        setCheckboxChecked(prev => {
            return prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
            // Nếu id đã check => bỏ id đó khỏi mảng <> thêm id đó vào mảng
        })
    }

    // Bài tập CHECKBOX - Cách khác (Sử dụng Object Set)
    const checkBoxSet = new Set() // Đối tượng mà không tồn tại phần tử trùng lặp
    const [_checkBoxChecked, _setCheckboxChecked] = useState()

    const _handleCheckBoxChecked = (id) => {
        checkBoxSet.has(id) ? checkBoxSet.delete(id) : checkBoxSet.add(id)
        _setCheckboxChecked([...checkBoxSet])
    }

    return (
        <div className="TwoWaysBinding" style={{ padding: 32 }}>
            {/* Bài tập INPUT */}
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName('Nguyen Van XXX')}>Change</button>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onSubmit={handleSubmitInput}>Submit Input</button>

            {/* Bài tập RADIO */}
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='radio'
                        checked={radioChecked === course.id}
                        onChange={() => setRadioChecked(course.id)}
                    /> {course.name}
                </div>
            ))}
            <button onSubmit={handleSubmitRadio}>Submit Radio</button>

            {/* Bài tập CHECKBOX */}
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checkBoxChecked.includes(course.id)}
                        onChange={() => handleCheckBox(course.id)}
                    /> {course.name}
                </div>
            ))}

            {/* Bài tập CHECKBOX - Cách khác (Sử dụng Object Set) */}
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checkBoxSet.has(course.id)}
                        onChange={() => _handleCheckBoxChecked(course.id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default TwoWaysBinding;