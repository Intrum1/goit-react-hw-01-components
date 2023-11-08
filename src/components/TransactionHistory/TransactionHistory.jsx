import CSS from './TransactionHistory.module.css'
import PropTypes from 'prop-types'


const TransactionHistory = ( {items} ) => {
    return (
        <table className={CSS.transactionhistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => 
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes={
  items:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currentle:PropTypes.string.isRequired,
    }),
  ),
}


export default TransactionHistory