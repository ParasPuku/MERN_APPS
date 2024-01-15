import React from 'react'
import './Login.style.scss'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login-container'>
      <form>
        <div className='login-section'>
            <h2>WELCOME</h2>
            <div className='login-screen'>
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
              <button type='submit' className='login-now'>Login Now</button>
              <div className='divider'>OR</div>
              <button className='register' onClick={() => navigate('/register')}>Register Now</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login