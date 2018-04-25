import React from 'react'
import Counter from './counter'

// const purchase = [{name: 'product', initial: 1}, ]
// <ShoppingCard purchase={purchase} />
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {sum: 3}
    this.changeHandler = this.changeHandler.bind(this)
    this.db = props.purchase.map(product => ({name: product.name, units: product.initial}))
    console.log(this.db)
  }

  changeHandler (key, oldValue, newValue) {
    this.db[key].units += newValue - oldValue
    this.setState(old => ({sum: old.sum + (newValue - oldValue)}))
    console.log(this.db[key])
  }

  render () {
    console.log('ShoopingCart render')
    const line = (prod, index) =>
      (<div key={index} > {prod.name} <Counter id={index} initial={prod.units}
        onChange={this.changeHandler} /></div>)

    return (
      <div>
        {this.db.map((prod, index) => line(prod, index))}
        <div>Sum: {this.state.sum}</div>
      </div>
    )
  }
}
