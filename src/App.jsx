import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import Chat from './Home/Chat'
import Man from './Category/Man'
import Lady from './Category/Lady'

function App() {
  return (
    <>
    <Nav />
    <Chat />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lady' element={<Lady />} />
      <Route path='/man' element={<Man />} />
    </Routes>
    </>
  )
}

export default App
