import React from 'react'

const commonClasses = 'link dib f5 fw6 tracked tc br2 ttu ba'
const lgBtnClasses = 'h3 pa3 eh-btn-primary'
const ctaBtnClasses = 'lh-solid ph4 pv4 eh-cta'
const smBtnClasses = 'h2 lh-solid pa3 eh-btn'

const sizes = ['large', 'small', 'cta']
const types = ['success', 'warning', 'danger', 'primary', 'default']
const options = ['outline']

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

const Button = ({href, type='default', size='large', options=[], children}) => {
    
    const outline = options.includes('outline')

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
  type: React.PropTypes.oneOf(types),
  size: React.PropTypes.oneOf(sizes),
  options: React.PropTypes.arrayOf(
             React.PropTypes.oneOf(options)
           ),
  children: React.PropTypes.string.isRequired
}

const buttonExampleList = [
  {
    children: 'Default'
  },
  {
    type: 'primary',
    size: 'cta',
    children: 'Primary'
  },
  {
    type: 'success',
    options: ['outline'],
    children: 'Success'
  },
  {
    type: 'warning',
    size: 'small',
    children: 'Warning'
  },
  {
    type: 'danger',
    size: 'small',
    options: ['outline'],
    children: 'Danger'
  }
]

/**
* Button Examples for Style Guide
*/
export const ButtonExamples = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap items-center'>
      {buttonExampleList.map((btn, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Button options={btn.options} {...btn}>
              {btn.children}
            </Button>
          </div>
        )
      })}
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
    type: `oneOf(${types})`,
    description: 'Styles Button accordingly'
  },
  {
    prop: 'size',
    type: `oneOf(${sizes})`,
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
