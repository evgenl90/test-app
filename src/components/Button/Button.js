import React from 'react'

const Button = (props) => {
    return(
        <button className="btn btn-lg btn-dark mt-5" role="button">
            {props.text}
        </button>
    )
}

export default Button