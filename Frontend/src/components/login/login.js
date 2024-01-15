import React from 'react'
import './Login.style.scss'
const Login = () => {
  return (
    <div className='login-container'>
      <form>
        <div className='login-section'>
            <h2>WELCOME</h2>
            <div className='login-screen'>
              <div className='fields'>
                <label className='username'>Name </label>
                <input className='field name' type='text' placeholder='Name'/>
              </div>
              <div className='fields'>
                <label className="email">Email </label>
                <input className="field email" type='text' placeholder='Email' />
              </div>
              <div className='fields'>
                <label className='email'>Password </label>
                <input className="field password" type='password' placeholder='Password' />
              </div>
            </div>
            <div className='login-action'>
              <button className='login-now'>Login Now</button>
              <div className='divider'>OR</div>
              <button className='register'>Register Now</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login