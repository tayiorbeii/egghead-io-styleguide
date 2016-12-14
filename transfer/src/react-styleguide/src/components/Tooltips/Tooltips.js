import React from 'react'

/**
 * Reusable Tooltip Component
 */
const Tooltip = ({children}) => {
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

/**
 * Password-specific Tooltip
 */
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
