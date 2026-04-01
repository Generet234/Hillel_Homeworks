import {Form} from 'react-bootstrap'
import PropTypes from "prop-types";

export const ProductForm = ({name,className,type,value,onChange,error,touched,placeholder,label,id}) => {
    let props = {name,className,type,error, placeholder, onChange, id:Number(id) + 1};

    if (type !== 'file') {
        props.value = value?? ""
    }
    const isChecked = type === 'checkbox' || type === 'switch'
    const isCheckedTextArea = type === 'textarea'
    return (
        <Form.Group className={className} controlId={String(props.id)}>
            {label && <Form.Label className='d-flex justify-content-start'>{label}</Form.Label>}
            {!isCheckedTextArea && !isChecked && <Form.Control {...props}/>}
            <div className="d-flex justify-content-start">
                {isChecked && <Form.Check {...props}/>}
            </div>
            {isCheckedTextArea && <Form.Control as='textarea' {...props}/>}
            {touched && error ? (
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            ) : null
            }
        </Form.Group>
    )
};

ProductForm.PropTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    touched: PropTypes.bool,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.number,

}