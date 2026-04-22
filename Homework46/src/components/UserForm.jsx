import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {validationSchema} from "../validation/userSchema.js";
import {useFormik} from "formik";
import {useState} from "react";
import {useAddUserMutation} from "../store/postApi.js";
import {useNavigate} from "react-router-dom";

const UserForm = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [addUser] = useAddUserMutation()
    const formik = useFormik({
        initialValues: {
            name:"",
            email:"",
            phone:'',
            website:"",
            username: "",
            city:"",
            street:"",
            companyName:""
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const result = await addUser(values).unwrap()
                console.log(result)
                setTimeout(() => {
                    navigate('/users')
                },1500)
            }
            catch (error) {
                console.log(error)
            }
        },
        onChange: values => {
            setData(values);
            console.log(data);
        }
    })
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={formik.values.email} onChange={formik.handleChange} isInvalid={formik.touched.email && formik.errors.email}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' value={formik.values.name} onChange={formik.handleChange} isInvalid={formik.touched.name && formik.errors.name}/>
                    <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name='username' value={formik.values.username} onChange={formik.handleChange} isInvalid={formik.touched.username && formik.errors.username}/>
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" placeholder="Website" name='website' value={formik.values.website} onChange={formik.handleChange} isInvalid={formik.touched.website && formik.errors.website}/>
                    <Form.Text className="text-muted">
                        We'll never share your website with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.website}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Phone number" name='phone' value={formik.values.phone} onChange={formik.handleChange} isInvalid={formik.touched.phone && formik.errors.phone}/>
                    <Form.Text className="text-muted">
                        We'll never share your phone with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" name='city' value={formik.values.city} onChange={formik.handleChange} isInvalid={formik.touched.city && formik.errors.city}/>
                    <Form.Text className="text-muted">
                        We'll never share your city with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" placeholder="Street" name='street' value={formik.values.street} onChange={formik.handleChange} isInvalid={formik.touched.street && formik.errors.street}/>
                    <Form.Text className="text-muted">
                        We'll never share your street with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company name" name='companyName' value={formik.values.companyName} onChange={formik.handleChange} isInvalid={formik.touched.companyName && formik.errors.companyName}/>
                    <Form.Text className="text-muted">
                        We'll never share your company name with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserForm;