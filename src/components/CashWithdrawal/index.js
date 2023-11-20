// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="container">
        <div className="balance-container">
          <div className="text-container">
            <div className="name-container">
              <h1 className="logo-letter"> S </h1>
              <h1 className="name"> Sarah Williams </h1>
            </div>
            <div className="rupees-container">
              <p className="balance-text"> Your Balance </p>
              <div className="money-container">
                <p className="amount">{balance}</p>
                <p className="rupee-text"> In Rupees </p>
              </div>
            </div>
            <div className="withDraw-container">
              <p className="heading"> Withdraw </p>
              <p className="sum-text"> CHOOSE SUM (IN RUPEES) </p>
              <ul className="cash-count">
                {denominationsList.map(eachCard => (
                  <DenominationItem
                    eachCount={eachCard}
                    key={eachCard.id}
                    updateBalance={this.updateBalance}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
