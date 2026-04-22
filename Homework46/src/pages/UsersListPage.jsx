import React from 'react';
import UsersTable from "../components/UsersTable.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useGetUsersQuery} from '../store/postApi.js'
import Loader from '../components/Loader.jsx'

const UsersListPage = () => {
    const {data: users = [], isLoading: loading} = useGetUsersQuery()

    if(loading) return <Loader />

    return (
        <>
            {users && <UsersTable data={users}/>}
            <Button as={Link} to={"/users/create"}>Create user</Button>
        </>
    );
};

export default UsersListPage;