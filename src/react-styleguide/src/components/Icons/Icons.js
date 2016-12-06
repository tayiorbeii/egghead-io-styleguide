import React from 'react'

const Icon = ({color, icon}) => {
  const commonClasses = 'absolute br-pill flex justify-center items-center eh-input-status-icon'
    
  return (
    <div className={`${commonClasses} ${color}`}>
      <i className={`fa ${icon}`} />
    </div>
  )
}

export const SuccessIcon = () => <Icon color='green' icon='fa-check-circle' />
export const PlusIcon = () => <Icon color='blue' icon='fa-plus-circle' />
export const MinusIcon = () => <Icon color='light-gray' icon='fa-minus-circle' />
export const XIcon = () => <Icon color='red' icon='fa-times-circle' />
export const BangIcon = () => <Icon color='red' icon='fa-exclamation-circle' />
export const QuestionIcon = () => <Icon color='yellow' icon='fa-question-circle' />

export const IconExamples = () => {
  const exampleLayoutClasses = 'w-100 w-50-m w-33-l pr3-m pl4-l mt2'

  return (
    <div className='relative flex flex-wrap'>
      <div className='w-33 h3 relative'>
        <SuccessIcon />
      </div>
      <div className='w-33 h3 relative'>
        <PlusIcon />
      </div>
      <div className='w-33 h3 relative'>
        <MinusIcon />
      </div>
      <div className='w-33 h3 relative'>
        <XIcon />
      </div>
      <div className='w-33 h3 relative'>
        <BangIcon />
      </div>
      <div className='w-33 h3 relative'>
        <QuestionIcon />
      </div>
    </div>
  )  
}
