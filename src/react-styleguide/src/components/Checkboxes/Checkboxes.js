import React from 'react'


// Unchecked
/**
 *
 * <label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-checkbox">
              <input type="checkbox" class="o-0 absolute left--1">
              <i class="mr3 br2 ba b--white hover-b--green eh-checkbox-icon"></i>Checkbox
            </label>


// Checked
// <label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-checkbox ml5">
              <input type="checkbox" class="o-0 absolute left--1" checked="">
              <i class="mr3 br2 ba b--white hover-b--green eh-checkbox-icon"></i>Checkbox
            </label>

// Disabled unchecked
<label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-checkbox disabled">
              <input type="checkbox" class="o-0 absolute left--1" disabled="">
              <i class="mr3 br2 ba b--white hover-b--green eh-checkbox-icon"></i>Checkbox
            </label>

// Disabled checked
<label class="inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-checkbox disabled ml5">
              <input type="checkbox" class="o-0 absolute left--1" disabled="" checked="">
              <i class="mr3 br2 ba b--white hover-b--green eh-checkbox-icon"></i>Checkbox
            </label>


*/

const labelClasses = 'inline-flex v-top items-center lh-title overflow-hidden pointer eh-checkbox'
const inputClasses = 'o-0 absolute left--1'
const boxClasses = 'mr3 br2 ba b--white hover-b--green eh-checkbox-icon'
const checkedClasses = 'ml5'
const disabledClasses = 'disabled'

const Checkbox = ({label, checked=false, disabled=false}) => {

  return (
    <label className=`${labelClasses} ${checked ? checkedClasses : ''} ${disabled ? disabledClasses : ''}`>
      <input type="checkbox" className={inputClasses} disabled={disabled} checked={checked}>
        <i className={boxClasses} />{label}
    </label>
  )
}

export default Checkbox

