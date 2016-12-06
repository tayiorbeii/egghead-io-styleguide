import React from 'react'
import { SuccessIcon, PlusIcon, MinusIcon,
         XIcon, BangIcon, QuestionIcon } from '../Icons/Icons'

const commonClasses = 'db w-100 pl3 pr5 pv3 lh-copy br2 bg-dark-navy ba eh-text-field'
const standardClasses = 'white b--gray focus-b-gray'
const errorClasses = 'red b--red focus-b--red'
const errMsgClases = 'db red f5 sans-serif mt3'
const successClasses = 'white b--green focus-b--green'
const disabledClasses = 'disabled'

const Input = ({type='text', placeholder, required=false, error=false,
                errMsg, disabled=false, value, icon}) => {
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
      {errMsg
        ? <div className={errMsgClases}>{errMsg}</div>
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
  errMsg: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  defaultValue: React.PropTypes.string
}

/**
 * Reusable Tooltip Component
 */
export const Tooltip = ({children}) => {
  const ttClasses = 'relative db br2 w-100 mt4 pa3 sans-serif navy bg-white eh-input-tooltip'  
  return (
    <div className={ttClasses}>
      {children}
    </div>
  )
}
Tooltip.propTypes = {
  children: React.PropTypes.node.isRequired
}

const PassStrength = ({strength}) => {
  // Strength Values (tachyon widths): 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100
  // TODO: Map strength value to a word (e.g. "Weak", "Good", "Strong")
  // TODO: Map strength value to appropriate width
  const width = `w-${strength}`
  const sWord = 'Good'

  return (
    <div>
      <h5 className='f5 normal ma0 mb3'>
        Password Strength: <strong className='fw-5'>{sWord}</strong>
      </h5>  
      <div className='w-100 mb3 br-pill overflow-hidden bg-light-gray'>
        <div className={`bg-blue pa1 ${width}`}></div>
      </div>
    </div>
  )
}
PassStrength.propTypes = {
  strength: React.PropTypes.number.isRequired
}

export const PasswordTooltip = () => {
    const passMsg = (
      <div className='f6 lh-copy'>
        Use at least 8 characters. Don’t use a password from another site, or something too obvious
        like your pet’s name. <a href="#" className='orange mh1'>Why?</a>
      </div>
    )

  return (
    <Tooltip>
      <PassStrength strength={60} />
      {passMsg}
    </Tooltip>
  )
}

/**
* Input Examples for Style Guide 
*/
export const InputExamples = () => {
  const Header = ({title}) => (
    <span className='db f4 fw5 lh-copy mb2'>{title}</span>
  )

  const exampleLayoutClasses = 'w-100 w-50-m w-33-l pr3-m pl4-l mt4'
  
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
          errMsg='Password must contain at least 8 characters.'
          icon={<XIcon />}
          value='With Error'
        />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Success*' />
        <Input value='Egghead' required
          icon={<SuccessIcon />}
          value='password'
          type='password'
        />
        <PasswordTooltip />
      </div>
    </div>
  )
}

export default Input
