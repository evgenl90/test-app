import React from 'react'


const TextInput = (props) => {
    
    return(
        <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">{props.name}</label>
            <input  type="text" 
                    className="form-control" 
                    id="firstName" 
                    value={props.itemCity} 
                    onChange={event => props.setCityValue(event)}
                    />
            <datalist id='select-city'>
                {/*props.listCity.map(item => {
                    return <option key={item.id} id={item.id} value={item.name} />
                }) */}
            </datalist>
        </div>
    )
}

export default TextInput