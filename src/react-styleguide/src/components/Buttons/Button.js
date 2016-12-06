import React from 'react'

const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba'
const lgBtnClasses = 'h3 pa3 eh-btn-primary'
const ctaBtnClasses = 'lh-solid ph4 pv4 eh-cta'
const smBtnClasses = 'h2 lh-solid pa3 eh-btn'

const sizedBtnClasses = {
  large: 'h3 pa3 eh-btn-primary',
  small: 'h2 lh-solid pa3 eh-btn',
  cta: 'lh-solid ph4 pv4 eh-cta'
}

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

const Button = ({href, type='default', size='large', outline=false, children}) => {
    const btnClasses = outline ? outlineBtnClasses[type] : solidBtnClasses[type]
    const sizeClasses = sizedBtnClasses[size]

    return (
      <a href={href} className={`${commonClasses} ${btnClasses} ${sizeClasses}`}>
        {children}
      </a>
    )
}

Button.propTypes = {
  href: React.PropTypes.string,
  type: React.PropTypes.oneOf(['success', 'warning', 'danger', 'primary', 'default']),
  size: React.PropTypes.oneOf(['large', 'small', 'cta']),
  outline: React.PropTypes.bool,
  children: React.PropTypes.string.isRequired
}

/**
* Button Examples for Style Guide
*/
export const ButtonExamples = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap items-center'>
      <div className='mb2'>
        <Button>Default</Button>
      </div>
      <div className='mb2 mh2'>
        <Button type='primary' size='cta'>Primary</Button>
      </div>
      <div className='mb2 mh2'>
        <Button type='success' outline>Success</Button>
      </div>
      <div className='mb2 mh2'>
        <Button type='warning' size='small'>Warning</Button>
      </div>
      <div className='mb2 mh2'>
        <Button type='danger' size='small' outline>Danger</Button>
      </div>
    </div>
  )
}

/**
* Example Code for above Buttons
*/
export const ButtonExampleCode = [
  `<Button>Default</Button>`,
  `<Button type='primary' size='cta'>Primary</Button>`,
  `<Button type='success' outline>Success</Button>`,
  `<Button type='warning' size='small'>Warning</Button>`,
  `<Button type='danger' size='small' outline>Danger</Button>`
]

/**
* Prop information to be rendered into the table
*/
export const ButtonPropsTable = [
  { 
    prop: 'href',
    type: 'string',
    description: 'Feeds a URL to the Button'
  },
  {
    prop: 'type',
    type: `oneOf(['success', 'warning', 'danger', 'primary', 'default'])`,
    description: 'Styles Button accordingly'
  },
  {
    prop: 'size',
    type: `oneOf(['large', 'small', 'cta'])`,
    description: 'Determines the size of the Button'
  },
  {
    prop: 'outline',
    type: 'boolean (false by default)',
    description: 'Determines if Button is solid or not'
  },
  {
    prop: 'children',
    type: 'string',
    description: 'Text to appear in the Button'
  }
]

export default Button
