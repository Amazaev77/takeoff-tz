import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { allActionCreators } from 'src/store/actionCreators'
import { AppDispatch } from 'src/store/store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(allActionCreators, dispatch)
}
