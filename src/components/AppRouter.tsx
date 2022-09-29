import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from 'src/components/layout/Layout'
import RequireAuth from 'src/hoc/RequireAuth'
import Home from 'src/pages/home/Home'
import Login from 'src/pages/login/Login'

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
