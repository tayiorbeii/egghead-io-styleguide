import React from 'react'

export const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba'
export const lgBtnClasses = 'h3 pa3 eh-btn-primary'
export const ctaBtnClasses = 'lh-solid ph4 pv4 eh-cta'
export const smBtnClasses = 'h2 lh-solid pa3 eh-btn'

const solidBtnClasses = {
  success: 'b--transparent bg-green dark-navy hover-bg-dark-green',
  warning: 'b--transparent bg-yellow dark-navy hover-bg-orange hover-white',
  danger: 'b--red bg-red white hover-b--dark-red hover-bg-dark-red',
  primary: 'b--transparent bg-blue white hover-bg-dark-blue',
  default: 'b--white bg-white dark-navy hover-bg-light-gray'
}

const outlineBtnClasses = {
  success: 'b--green green hover-dark-navy hover-bg-green',
  warning: 'b--yellow yellow hover-dark-navy hover-bg-yellow',
  danger: 'b--red red hover-dark-navy hover-bg-red',
  primary: 'b--blue blue white hover-bg-dark-blue',
  default: 'b--white white hover-dark-navy hover-bg-white'
}

const Button = ({href, type='default', size='large', outline=false, children='Button'}) => {
    const btnClasses = outline ? outlineBtnClasses[type] : solidBtnClasses[type]
    const sizeClasses = size === 'large' ? lgBtnClasses : smBtnClasses

    return (
      <a href={href} className={`${commonClasses} ${btnClasses} ${sizeClasses}`}>
        {children}
      </a>
    )
}

Button.propTypes = {
  href: React.PropTypes.string,
  type: React.PropTypes.oneOf(['success', 'warning', 'danger', 'primary', 'default']),
  size: React.PropTypes.oneOf(['large', 'small']),
  outline: React.PropTypes.bool,
  children: React.PropTypes.string
}

export default Button
