import React, {useEffect} from 'react';
import {Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const navigateToTheMainPage = () => {
            setTimeout(() => {
                navigate('/')
            }, 5000)
        }
        navigateToTheMainPage();
    }, [])
    return (
        <>
            <Alert variant='danger'>Цю сторінку не знайдено, через 5 секунд переведемо Вас на головну сторінку</Alert>
        </>
    );
};

export default NotFoundPage;