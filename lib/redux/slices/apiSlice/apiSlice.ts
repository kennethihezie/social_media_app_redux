// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
// When we call createApi, there are two fields that are required:
// baseQuery: a function that knows how to fetch data from the server. 
// RTK Query includes fetchBaseQuery, a small wrapper around the standard fetch() function
// that handles typical processing of requests and responses. When we create a fetchBaseQuery 
// instance, we can pass in the base URL of all future requests, as well as override behavior 
// such as modifying request headers.
// endpoints: a set of operations that we've defined for interacting with this server. 
// Endpoints can be queries, which return data for caching, or mutations, which send an
// update to the server. The endpoints are defined using a callback function that accepts 
// a builder parameter and returns an object containing endpoint definitions created 
// with builder.query() and builder.mutation().

// createApi also accepts a reducerPath field, which defines the expected top-level 
// state slice field for the generated reducer. For our other slices like postsSlice,
// there's no guarantee that it will be used to update state.posts - we could have attached
// the reducer anywhere in the root state, like someOtherField: postsReducer. Here,
// createApi expects us to tell it where the cache state will exist when we add the
// cache reducer to the store. If you don't provide a reducerPath option, it defaults to 'api',
// so all your RTKQ cache data will be stored under state.api.

// RTK Query lets us define relationships between queries and mutations to enable automatic data
// refetching, using "tags". A "tag" is a string or small object that lets you name certain types
// of data, and invalidate portions of the cache. When a cache tag is invalidated, RTK Query will
// automatically refetch the endpoints that were marked with that tag.
// Basic tag usage requires adding three pieces of information to our API slice:
// A root tagTypes field in the API slice object, declaring an array of string tag names for
// data types such as 'Post'
// A providesTags array in query endpoints, listing a set of tags describing the data in that query
// An invalidatesTags array in mutation endpoints, listing a set of tags that are invalidated
// every time that mutation runs

export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
    tagTypes: ['Post'],
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getPosts: builder.query({
            // The URL for the request is '/fakeApi/posts'
            // By default, query endpoints will use a GET HTTP request, but you can override 
            // that by returning an object like {url: '/posts', method: 'POST', body: newPost}
            // instead of just the URL string itself. You can also define several other options
            // for the request this way, such as setting headers.
            query: () => '/posts',

            providesTags: ['Post']
        }),
        getPost: builder.query({
            query: postId => `/post/${postId}`
        }),
        addNewPost: builder.mutation({
            query: newPost => ({
                url: '/posts',
                method: 'POST',
                // Include the entire post object as the body of the request
                body: newPost
            }),
            invalidatesTags: ['Post']
        })
    })
})


// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } = apiSlice