// Write your code here

import './index.css'

const DenominationItem = props => {
  const {eachCount, updateBalance} = props
  const {value} = eachCount

  const onDecrement = () => {
    updateBalance(value)
  }

  return (
    <li className="button-container">
      <button className="button" type="button" onClick={onDecrement}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
