import React from 'react'

const iconMap = {
  success: {color: 'green', icon: 'fa-check-circle'},
  cancel: {color: 'red', icon: 'fa-times-circle'},
  add: {color: 'blue', icon: 'fa-plus-circle'},
  warning: {color: 'red', icon: 'fa-exclamation-circle'},
  remove: {color: 'light-gray', icon: 'fa-minus-circle'},
  question: {color: 'yellow', icon: 'fa-question-circle'}
}

const Icon = ({type}) => {
  const commonClasses = 'absolute br-pill flex justify-center items-center eh-input-status-icon'

  return (
    <div className={`${commonClasses} ${iconMap[type]['color']}`}>
      <i className={`fa ${iconMap[type]['icon']}`} />
    </div>
  )
}


export const IconExamples = () => {
  const exampleLayoutClasses = 'w-100 w-50-m w-33-l pr3-m pl4-l mt2'
  const IconBlock = ({type}) => {
    return (
      <div className='w-33 h3 relative'>
        <Icon type={type} />
      </div>
    )
  }

  return (
    <div className='relative flex flex-wrap'>
      {Object.keys(iconMap).map((t, i) => <IconBlock type={t} key={i} />)}
    </div>
  )
}

export default Icon
