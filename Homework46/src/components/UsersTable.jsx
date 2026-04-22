import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useDeleteUserMutation} from '../store/postApi.js'

const UsersTable = ({data}) => {
    const [usersList, setUsersList] = useState(data);
    const [deleteUser] = useDeleteUserMutation()
    useEffect(() => {
        setUsersList(data);
    }, [data])

    const handleDelete = ({id}) => () => {
        const isConfirm = window.confirm("Are you sure you want to delete?");
        if(isConfirm){
            try {
                deleteUser(id)
                setUsersList(prev => prev.filter((user) => user.id !== id));
            }
            catch(error) {
                throw new Error(error)
            }
        }
    }
    const tableElements = () => {
        return usersList.map(({id,name,email,phone,website}) => {
            return (
                <tr key={id}>
                    <td><Link to={`/users/${id}`}>{name}</Link></td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{website}</td>
                    <td>
                        <div className='d-flex gap-2'>
                            <Button as={Link} to={`/users/${id}`} variant='info'>View</Button>
                            <Button as={Link} to={`/users/${id}/edit`} variant='warning'>Edit</Button>
                            <Button onClick={handleDelete({id})} variant='danger'>Delete</Button>
                        </div>
                    </td>
                </tr>
            )
        })
    }
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {tableElements()}
            </tbody>
        </Table>
    );
};

export default UsersTable;