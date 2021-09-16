import React from 'react'

const Button = (props) => {
    return(
        <button type={props.type} className="btn btn-lg btn-dark mt-5" role="button" onClick={props.click}>
            {props.text}
        </button>
    )
}

export default Button