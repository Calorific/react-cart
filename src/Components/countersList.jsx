import React, {useState} from 'react'
import Counter from './counter'

const CountersList = props => {
  const initialState = [
    { id: 0, value: 1, name: 'Ненужная вещь'},
    { id: 1, value: 2, name: 'Ложка'},
    { id: 2, value: 3, name: 'Вилка'},
    { id: 3, value: 0, name: 'Тарелка'},
    { id: 4, value: 3, name: 'Набор минималиста'}
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = id => {
    setCounters(counters.filter(c => c.id !== id))
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = id => {
    const idx = counters.findIndex(c => c.id === id)
    counters[idx].value++
    setCounters([...counters])
  }

  const handleDecrement = id => {
    const idx = counters.findIndex(c => c.id === id)
    counters[idx].value--
    setCounters([...counters])
  }

  return (
    <>
      {counters.map(count =>
          <Counter
            key={count.id}
            {...count}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
      )}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )
}

export default CountersList