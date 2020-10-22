import React from 'react'
import PropTypes from 'prop-types'

const Button = ({name,color,wide}) => {
    return (
        <button className={ `${wide ? 'w-50' : 'w-25'} ${color}` }  >
            {name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    wide: PropTypes.string,
}

Button.defaultProps={
    color: 'orange-backg',
    wide: false,
}

export default Button
