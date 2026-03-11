import React from "react";
import {Form} from 'react-bootstrap'
export const inputs = [
    {id:1, type:"text",className:"form-control", placeholder:"Write your task there",name:"title",label:'Title'},
    {id:2, type: 'textarea',className:"form-control", placeholder:"Concrete your task there",name:"description",label:'Description'},
];
export const InputComponent = ({ input, value, onChange }) => {
    return (
            <Form.Control
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                className={input.className}
                value={value}
                onChange={onChange}
            />
    )

}
