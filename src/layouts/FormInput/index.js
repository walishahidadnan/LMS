import React from 'react'

export const FormInput = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
export default FormInput;
