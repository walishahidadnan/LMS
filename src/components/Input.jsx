import React from 'react'

const Input = () => {
  return (
    <div>
        <div className='card' id={id}>
            <div className="icon">
                {props.icon}
            </div>
            <div className="iconname">
                <p>{props.naem}</p>
            </div>
        </div>
    </div>
  )
}

export default Input