import React from 'react'


const TextInput = (props) => {

    return(
        <div className="col-sm-6">
            <label htmlFor={!!props.label ? props.label : ''} className="form-label">{props.name}</label>
            <input  type={props.type} 
                    className="form-control" 
                    list={!!props.id ? props.id : ''}
                    value={!!props.value ? props.value : ''} 
                    onChange={!!props.setValue ? event => props.setValue(event) : ()=>{}}
                    />
            {!!props.list ? (
                <datalist id={props.id}>
                    {props.list.map(item => {
                        return <option key={item.id} id={item.id} value={item.name} />
                    }) }
                </datalist>
            ) : 
            ''}
        </div>
    )
}

export default TextInput