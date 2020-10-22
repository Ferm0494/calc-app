import React from 'react'
import PropTypes from 'prop-types'

const Display = ({result}) => {
    return (
        <div className={"d-flex w-700 h-100 display"}>
           {result}
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
