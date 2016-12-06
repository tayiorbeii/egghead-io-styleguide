import React from 'react'
import Icon, { IconExamples } from '../Icons/Icons'
import { PasswordTooltip } from '../Tooltips/Tooltips'

const commonClasses = 'db w-100 pl3 pr5 pv3 lh-copy br2 bg-dark-navy ba eh-text-field'
const standardClasses = 'white b--gray focus-b-gray'
const errorClasses = 'red b--red focus-b--red'
const errorMsgClases = 'db red f5 sans-serif mt3'
const successClasses = 'white b--green focus-b--green'
const disabledClasses = 'disabled'

const Input = ({type='text', placeholder, required=false, error=false,
                errorMsg, disabled=false, value, icon}) => {
  let inputStyles = standardClasses

  // If field is required, set style to error or success
  if (required) {
    inputStyles = error ? errorClasses : successClasses
  }

  return (
    <div className='relative eh-text-field-wrapper'>
      <input type={type} placeholder={placeholder} required={required} disabled={disabled} defaultValue={value}
        className={`${commonClasses} ${inputStyles} ${disabled ? disabledClasses : ''}`}
      />
      {icon}
      {errorMsg
        ? <div className={errorMsgClases}>{errorMsg}</div>
        : null 
      }
    </div>
  )
}

Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  error: React.PropTypes.bool,
  errorMsg: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  defaultValue: React.PropTypes.string
}

/**
* Input Examples for Style Guide 
*/
export const InputExamples = () => {
  const Header = ({title}) => (
    <span className='db f4 fw5 lh-copy mb2'>{title}</span>
  )

  const exampleLayoutClasses = 'w-100 w-50-m w-33-l pr3-m pl4-l mt2'
  
  return(
    <div className='flex flex-row justify-center flex-wrap items-center'>

      <div className={exampleLayoutClasses}>
        <Header title='Empty Field' />
        <Input />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Field with Placeholder' />
        <Input placeholder='Placeholder' />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Disabled Field' />
        <Input value='Egghead' disabled />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Error*' />
        <Input value='Egghead' required error
          errorMsg='Password must contain at least 8 characters.'
          icon={<Icon type='cancel' />}
          value='With Error'
        />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Success*' />
        <Input value='Egghead' required
          icon={<Icon type='success' />}
          value='password'
          type='password'
        />
        <PasswordTooltip />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Icons' />
        <IconExamples />
      </div> 

    </div>
  )
}

/**
 * Example Code for above Input Examples
 * (Ugly formatting, but looks right when rendered)
 */
export const InputExampleCode = [
  `<Input />`,
  `<Input placeholder='Placeholder' />`, 
  `<Input value='Egghead' disabled />`,
  `<Input value='Egghead' required error
  errorMsg='Password must contain at least 8 characters.'
  icon={<Icon type='cancel' />}
  value='With Error'
/>`,
 `<Input value='Egghead' required
  icon={<Icon type='success' />}
  value='password'
  type='password'
/>`,
 `<PasswordTooltip />`,
`<Icon type='success | cancel | add | warning | remove | question' />`
]

export const InputPropsTable = [
  { 
    prop: 'type',
    type: 'string',
    description: 'Input type, e.g. text or password'
  },
  { 
    prop: 'placeholder',
    type: 'string',
    description: 'Placeholder in input field'
  },
  { 
    prop: 'required',
    type: 'boolean (false by default)',
    description: 'If required, will be styled as "Error" or "Success"'
  },
  { 
    prop: 'error',
    type: 'boolean (false by default)',
    description: 'Style input as "Error"'
  },
  { 
    prop: 'errorMsg',
    type: 'string',
    description: 'Error message text to display'
  },
  { 
    prop: 'disabled',
    type: 'boolean (false by default)',
    description: 'If true, disables input'
  },
  { 
    prop: 'defaultValue',
    type: 'string',
    description: 'Optional default value for the input'
  },
  { 
    prop: 'icon',
    type: 'Icon component',
    description: 'Optional icon component to add to input'
  }
]

export default Input
