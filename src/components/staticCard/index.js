import React, {PropTypes} from 'react'

const DumbComponent = ({
  children, 
  onClick, 
  className,
}) => (
  <button
    className={`button-reset bn dib b0 ttu dim br2 ph3 pv2 white bg-orange tc ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

DumbComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default DumbComponent
