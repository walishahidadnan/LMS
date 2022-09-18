import React from 'react';

// import pages
import FormInput from'./Form/';

import "./form.css";

const Form = () => {
    return (
        <div>
            <form className="Form">
                <div className="row">
                    <FormInput type="text" placeholder="Your Full Name"/>
                </div>
                <div className="row1">
                    <FormInput type="email" placeholder="Your Email Adress"/>
                </div>
                <div className="row2">
                    <FormInput type="password" placeholder="Your Password"/>
                </div>
            </form>
        </div>
    )
}

export default Form;
