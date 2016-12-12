import React, { Component } from 'react'
import { commonLabelClasses, commonIconClasses, inputClasses, disabledClasses } from '../Checkboxes/Checkboxes'

const radioClasses = 'mb2 mh2 eh-radio'
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
      // Handle radio option that's checked by default
      if (item.checked) {
        this.setState({ selectedItem: item.value })
        item = Object.assign(item, { checked: false })
      }

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

const radioOptions = [
  { value: 'thing1', label: 'Radio One' },
  { value: 'thing2', label: 'Radio Two', checked: true },
  { value: 'thing3', label: 'Radio Three', disabled: true },
  { value: 'thing4', label: 'Radio Four', checked: true, disabled: true },
]

/**
 * RadioGroup Examples for Style Guide
 */
export const RadioButtonGroupExamples = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap items-center'>
          <div className='mb2 mh2'>
            <RadioButtonGroup optionList={radioOptions} />
          </div>
    </div>
  )
}

/**
 * Example Code for above Radio Group
 */
export const RadioButtonGroupExampleCode = [
  `// \`RadioButtonGroup\` maps over an array of objects`,
  `const radioOptions = [
  { value: 'thing1', label: 'Radio One' },
  { value: 'thing2', label: 'Radio Two', checked: true },
  { value: 'thing3', label: 'Radio Three', disabled: true },
  { value: 'thing4', label: 'Radio Four', checked: true, disabled: true },
]`
]

/**
* Prop information to be rendered into the table
*/
export const RadioButtonGroupPropsTable = [
  {
    prop: 'value',
    type: 'string',
    description: 'HTML value name'
  },
  {
    prop: 'label',
    type: 'string',
    description: 'Label to appear next to the radio button'
  },
  {
    prop: 'checked',
    type: 'boolean (false by default)',
    description: 'Determines if radio is checked by default'
  },
  {
    prop: 'disabled',
    type: 'boolean (false by default)',
    description: 'Determines if radio is disabled'
  }
]


export default RadioButtonGroup
