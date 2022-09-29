import { ChangeEvent, FC, useContext } from 'react'
import { TableContext } from 'src/providers/TableProvider'

import { TextField } from '@mui/material'

const SearchField: FC = () => {
  const { searchTerm, setSearchTerm } = useContext(TableContext)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <TextField
      id='outlined-search'
      label='Search field'
      type='search'
      size='small'
      value={searchTerm}
      onChange={handleChange}
    />
  )
}

export default SearchField
