import React, {PropTypes} from 'react'

const StaticCard = ({
  className,
}) => (
  <div
    className={`red ${className}`}
  >
    <h4>StaticCard</h4>
  </div>
)

StaticCard.propTypes = {
  className: PropTypes.string,
}

export default StaticCard
