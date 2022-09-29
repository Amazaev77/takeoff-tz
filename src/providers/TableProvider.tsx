import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import * as React from 'react'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { useDebounce } from 'src/hooks/useDebounce'
import { IContact } from 'src/models/IContact'
import { useFetchContacts } from 'src/services/contact/ContactService'

interface IValue {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  rowsPerPage: number
  setRowsPerPage: Dispatch<SetStateAction<number>>
  editId: number | null
  setEditId: Dispatch<SetStateAction<number | null>>
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  data: IContact[] | undefined
  isLoading: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const TableContext = createContext({} as IValue)

const TableProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [editId, setEditId] = React.useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedValue = useDebounce(searchTerm, 500)

  const { data, isLoading, error, refetch } = useFetchContacts({
    limit: 100,
    searchQuery: debouncedValue,
  })

  useEffect(() => {
    refetch()
  }, [debouncedValue, refetch])

  const value: IValue = {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    editId,
    setEditId,
    data,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
  }

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export default TableProvider
