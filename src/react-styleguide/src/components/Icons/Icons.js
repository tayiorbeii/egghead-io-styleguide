import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

/**
 * GREEN CHECK
<div class="absolute br-pill flex justify-center content-start green eh-input-status-icon">
              <i class="fa fa-check-circle"></i>
            </div>


BLUE PLUS
<div class="absolute br-pill flex justify-center items-center blue eh-input-status-icon">
              <i class="fa fa-plus-circle"></i>
            </div>

GREY MINUS
<div class="absolute br-pill flex justify-center items-center light-gray eh-input-status-icon">
              <i class="fa fa-minus-circle"></i>
            </div>

RED X
<div class="absolute br-pill flex justify-center items-center red eh-input-status-icon">
              <i class="fa fa-times-circle"></i>
            </div>

RED BANG
<div class="absolute br-pill flex justify-center items-center red eh-input-status-icon">
              <i class="fa fa-exclamation-circle"></i>
            </div>

YELLOW QUESTION
<div class="absolute br-pill flex justify-center items-center yellow eh-input-status-icon">
              <i class="fa fa-question-circle"></i>
            </div>

*/

const Icon = ({color, icon}) => {
  const commonClasses = 'absolute br-pill flex justify-center items-center eh-input-status-icon'
    
  return (
    <div className={`${commonClasses} ${color}`}>
      <i className={`fa ${icon}`} />
    </div>
  )
}

export const SuccessIcon = () => <Icon color='green' icon='fa-check-circle' />

