import React from 'react'
import PropTypes from 'prop-types'

const Display = ({result}) => {
    return (
        <div className={"h-100px d-flex display"}>
          <p>
                {result}
          </p>
        </div>
    )
}

Display.propTypes = {
    result: PropTypes.string,
}

Display.defaultProps ={
    result: '0'
}

export default Display
