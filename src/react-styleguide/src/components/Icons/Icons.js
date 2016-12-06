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
