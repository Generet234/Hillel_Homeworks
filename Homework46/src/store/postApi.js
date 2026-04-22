import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        addUser: build.mutation({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: newUser
            })
        }),
        getUsers: build.query({
            query: () => 'users'
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE'
            })
        }),
        getUserById: build.query({
            query: (id) => `users/${id}`,
        }),
        userEditById: build.mutation({
            query: (values) => ({
                url: `users/${values.id}`,
                body:values,
                method: 'PUT'
            }),
        })
    })
})

export const {useAddUserMutation,useGetUsersQuery,useDeleteUserMutation,useLazyGetUserByIdQuery,useUserEditByIdMutation} = postAPI