import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP_SERVER_URL } from 'src/api/api-url'
import { IContact } from 'src/models/IContact'

interface IFetchParams {
  limit: number
  searchQuery?: string | undefined
}

export const contactAPI = createApi({
  reducerPath: 'contactAPI',
  baseQuery: fetchBaseQuery({ baseUrl: APP_SERVER_URL }),
  tagTypes: ['Contact'],
  endpoints: (build) => ({
    fetchAllContacts: build.query<IContact[], IFetchParams>({
      query: ({ limit, searchQuery }) => ({
        url: '/contacts',
        params: {
          _limit: limit,
          q: searchQuery || '',
        },
      }),
      providesTags: () => ['Contact'],
    }),
    createContact: build.mutation<IContact, Omit<IContact, 'id'>>({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: build.mutation<IContact, IContact>({
      query: (contact) => ({
        url: `/contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: build.mutation<IContact, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useFetchAllContactsQuery: useFetchContacts,
  useCreateContactMutation: useCreateContact,
  useDeleteContactMutation: useDeleteContact,
  useUpdateContactMutation: useUpdateContact,
} = contactAPI
