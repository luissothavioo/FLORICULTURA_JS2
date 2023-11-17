import { Routes, Route } from "react-router-dom"
import { PageHome, PageList, PageLayout, PageCadastrar, PageEntrar } from "../pages"
//import ProtectedRoute from './ProtectedRoute'

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path= "/" element={<PageLayout />}>
        <Route path= "" element={<PageHome />} />
        <Route path= "/flores" element={<PageList />} />
        <Route path= "/cadastrar" element={<PageCadastrar />} />
        <Route path= "/entrar" element={<PageEntrar />} />
      </Route>
    </Routes>
  )
}
