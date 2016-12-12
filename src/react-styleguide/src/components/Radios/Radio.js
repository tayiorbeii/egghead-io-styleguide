import React, { Component } from 'react'
import { commonLabelClasses, commonIconClasses, inputClasses, disabledClasses } from '../Checkboxes/Checkboxes'

const radioClasses = 'eh-radio'
const radioIconClasses = `${commonIconClasses} br-pill eh-radio-icon`

class RadioButtonGroup extends Component {
  static propTypes = {
    optionList: React.PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = { selectedItem: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = (e) => {
    this.setState({ selectedItem: e.target.id })
  }

  render() {
    const { optionList } = this.props

    const radioButton = (item) => {
    return (
        <label key={item.value}
          className={`${commonLabelClasses} ${radioClasses} ${item.disabled ? disabledClasses : ''}`}
        >
          <input type='radio' className={inputClasses} disabled={item.disabled}
            checked={this.state.selectedItem === item.value}
            onChange={(e) => this.handleChange(e)} id={item.value}
          />
          <i className={radioIconClasses} />
          {item.label}
        </label>
      )
    }

    return (
      <div>
        {this.props.optionList.map((item) => radioButton(item))}
      </div>
    )
  }

}

export default RadioButtonGroup
