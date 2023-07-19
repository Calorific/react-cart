import React, {useState} from 'react'

const Counter = props => {

  // const [value, setValue] = useState(props.value)
  const {value} = props
  const formatValue= _ => value || 'empty'

  const getBadgeClasses = _ => {
    let classes = 'badge m-2 '
    classes += !value ? 'bg-warning' : 'bg-primary'
    return classes
  }

  return (
    <div>
      {props.name}
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
      <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>

  )
}

export default Counter