import './SCSS/App/app.css'
import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import Chat from './Home/Chat'
import Man from './Category/Man'
import Lady from './Category/Lady'
import AddAdmin from './Admin/AddAdmin'
import AdminChange from './Admin/AdminChange'
import AllAdmin from './Admin/AllAdmin'
import Error from './Home/Error'

function App() {
  return (
    <div className='App'>
    <Nav />
    <Chat />
    <Routes>
      {/* Error Page */}
      <Route path='*' element={<Error />} />
      {/* Normal Pages */}
      <Route path='/' element={<Home />} />
      <Route path='/lady' element={<Lady />} />
      <Route path='/man' element={<Man />} />
      {/* Admin Pages */}
      <Route path='/create' element={<AddAdmin />} />
      <Route path='/change/:id' element={<AdminChange />} />
      <Route path='/alladmin' element={<AllAdmin />} />
    </Routes>
    </div>
  )
}

export default App
