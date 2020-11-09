import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const SignUpForm = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  }
)
  const onSubmit = () => {

  }

  const onChange = () => {

  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>

        {error && <p>{error.message}</p>}
      </form>
      <h3>
        Dont have an account? <Link to={ROUTES.SIGN_UP}></Link>
      </h3>
    </>
  )
}


export default SignUpForm