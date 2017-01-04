import React, {PropTypes} from 'react'
import {keys} from 'lodash'

export const sizes = {
  1: '',
  2: 'fa-lg',
  3: 'fa-2x',
  4: 'fa-3x',
  5: 'fa-4x',
  6: 'fa-5x',
}

export const types = {
  'success': 'check-circle',
  'cancel': 'times-circle',
  'add': 'plus-circle',
  'warning': 'exclamation-circle',
  'remove': 'minus-circle',
  'question': 'question-circle',
  'menu': 'bars',
  'box': 'square-o',
  'box-check': 'check-square-o',
  'close': 'close',
  'info': 'info-circle',
  'clock': 'clock-o',
  'dollar': 'money',
  'course': 'folder-open-o',
  'lesson': 'file-o'
}

export const colors = {
  'success': 'green',
  'primary': 'blue',
  'warning': 'yellow',
  'danger': 'red',
  'light': 'light-gray'
}

const Icon = ({
  type,
  size,
  color,
  className,
}) => (
  <span className={`
    fa
    fa-${types[type]} 
    ${sizes[size]}
    ${colors[color]}
    ${className}
  `} />
)

Icon.propTypes = {
  type: PropTypes.oneOf(keys(types)).isRequired,
  size: PropTypes.oneOf(keys(sizes)),
  color: PropTypes.oneOf(keys(colors)),
  className:  PropTypes.string,
}

Icon.defaultProps = {
  size: '1',
}

export default Icon
