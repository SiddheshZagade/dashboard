import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL}),
    reducerPath:"adminApi",
    tagTypes:["User"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (revelance) => `general/user/${revelance}`,
            providesTags: ["User"],
            onError: (error) => console.log(error),
        })
    })


})

export const {
    useGetUserQuery,
} = api;