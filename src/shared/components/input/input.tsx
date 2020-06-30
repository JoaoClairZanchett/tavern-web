import React, {FunctionComponent} from 'react'

import './input.styles.scss'

interface IInput {
    htmlFor: string;
    type: string;
    name: string;
    id: string;
    onChange: any;
    label?: string;
    error?: boolean;
    value?: string;
}

const Input: FunctionComponent<IInput> = (props) =>  {
    return (
        <div className={`${props.error ? 'error' : ''} field`} >
            <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.type !==  'textarea' ?
                <input  {...props} onChange={props.onChange} /> : 
                <textarea  {...props} onChange={props.onChange} />
            }
            
        </div>  
    )
}

export default Input;