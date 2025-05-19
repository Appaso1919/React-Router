import React from 'react'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Page not found</h1>
      <h2>404 ERROR</h2>
      <div>
        <Link to="/">Go to th Home Page</Link>
      </div>
      <img style={{width:"60%"}}src='https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png' alt='' />
    </div>
  )
}

export default PageNotfound
