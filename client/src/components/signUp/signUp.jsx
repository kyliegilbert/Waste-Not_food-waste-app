import "./signUp.css"
import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

  return (
    <>
      <Link className="button" to = {`/Signup`}><button>SIGN UP!</button></Link>
    </>
  )
}