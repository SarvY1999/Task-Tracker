import React from "react";
import PropTypes from "prop-types";


const Button = ({color, text, onClick}) => {

    return <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
    text: "Name the button"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button;