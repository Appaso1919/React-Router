import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Collage = () => {
  return (
    <div className="collage" style={{textAlign:'center'}}>
      <h1>Collage page</h1>
      <NavLink className="link" to="">Student</NavLink>
      <NavLink className="link" to="department">Department</NavLink>
      <NavLink className="link" to="details">Collage Details</NavLink>
      <Outlet/>
    </div>
  )
}

export default Collage