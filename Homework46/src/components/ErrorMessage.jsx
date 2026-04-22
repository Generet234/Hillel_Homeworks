import React from 'react';
import {Alert, Container} from "react-bootstrap";
import PropTypes from "prop-types";

const ErrorMessage = ({message}) => {
    return (
        <Container className='mt-4'>
            <Alert variant='danger'>Сталася помилка, перевірте усе!</Alert>
            <p>{message}</p>
        </Container>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string
}

export default ErrorMessage;