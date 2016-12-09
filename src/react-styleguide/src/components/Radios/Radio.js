import React, { Component } from 'react'
import { commonLabelClasses, commonIconClasses, inputClasses, disabledClasses } from '../Checkboxes/Checkboxes'

const radioClasses = 'eh-radio'
const radioIconClasses = `${commonIconClasses} br-pill eh-checkbox-icon`

/**
 * Unchecked Radio
 *<label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-radio">
              <input type="radio" class="o-0 absolute left--1" name="radio">
              <i class="mr3 br-pill ba b--white hover-b--green eh-radio-icon"></i>Radio
            </label>
 *
 * Checked Radio
 * <label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-radio ml5">
              <input type="radio" class="o-0 absolute left--1" name="radio" checked="">
              <i class="mr3 br-pill ba b--white hover-b--green eh-radio-icon"></i>Radio
            </label>
 *
 */

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
    console.log('old state:', this.state)
    console.log('e', e.target.id)
    this.setState({ selectedItem: e.target.id })
    console.log('new state:', this.state)
  }

  render() {
    const { optionList } = this.props

    const radioButton = (item) => {
      return (
        <label key={item.value}
          className={`${commonLabelClasses} ${radioClasses} ${item.disabled ? disabledClasses : ''}`}
        >
          <input type='radio' className={inputClasses} disabled={item.disabled}
            selected={this.state.selectedItem === item.value}
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
