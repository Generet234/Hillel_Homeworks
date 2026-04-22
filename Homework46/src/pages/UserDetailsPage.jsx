import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useLazyGetUserByIdQuery} from "../store/postApi.js";
import {Card, ListGroup} from "react-bootstrap";

const UserDetailsPage = () => {

    let params = useParams();
    const [getUserById,{data: data, isLoading: loading}] = useLazyGetUserByIdQuery()
    console.log(params.id);
    useEffect(() => {
        getUserById(params.id)
    },[])
    return (
        data && (
            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Name : {data.name}</ListGroup.Item>
                <ListGroup.Item>Username : {data.username}</ListGroup.Item>
                <ListGroup.Item>Email : {data.email}</ListGroup.Item>
                <ListGroup.Item>Phone : {data.phone}</ListGroup.Item>
                <ListGroup.Item>Website : {data.website}</ListGroup.Item>
                <ListGroup.Item>Company name : {data?.company.name}</ListGroup.Item>
                <ListGroup.Item>Address city : {data?.address.city}</ListGroup.Item>
                <ListGroup.Item>Address street : {data?.address.street}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
    )
};

export default UserDetailsPage;