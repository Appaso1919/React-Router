import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import PageNotfound from './component/PageNotfound'
import Collage from './component/Nested_componet/Collage'
import Studen from './component/Nested_componet/Studen'
import Department from './component/Nested_componet/Department'
import Details from './component/Nested_componet/Details'
import UserList from './component/User/UserList'
import UserDetail from './component/User/UserDetails'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element={<About/>}></Route>
       <Route path='/users' element={<UserList/>}/>
       <Route path='/users/:id' element={<UserDetail/>}/>
      <Route path='/*' element={<PageNotfound/>}/>

      <Route path="/collage" element={<Collage/>}>
      <Route index element={<Studen/>}/>
      <Route path='department' element={<Department/>}/>
      <Route path='details' element={<Details/>}/>
      </Route>
     
     </Routes>
    </>
  )
}

export default App
