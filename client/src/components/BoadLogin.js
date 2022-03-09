import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function BoadLogin() {

  const initialValues = {

    email: '',
    password: ''
  }

  const [data, setData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const focusElement = useRef(null)


  const change = e=> {

    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  //VALIDATE

  const validate = (data)=> {

    let err = {}

    if(!data.email.trim()) {
      err.email= 'email is required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
        err.email = 'email address is invalid'
    }

    if(!data.password.trim()) {

        err.password = 'password is require'
    }
    return err
  }
  

  const submitForm = e=> {
    
    e.preventDefault()
    setErrors(validate(data))
    setSubmit(true)
  }


  useEffect(() => {

    focusElement.current.focus()
    
    if(Object.keys(errors).length === 0 && submit) {

      console.log(data);
      setRedirect(true)
    }
    
  
  // eslint-disable-next-line
  }, [errors])
  


  return (

    
      
    <div className='BoadLogin'>

      {redirect && <Navigate to='/' />}

      <form 
        className='form-account-content'
        onSubmit={submitForm}>
        
        <h2 className='form-account-label'>login</h2>

        <div className='form-account-inputs'>
          <label
            className='form-account-label'
            htmlFor='email'
          >email</label>

          <input 
            id='email'
            type= 'email'
            name= 'email'
            className='form-input-input'
            placeholder='Enter your email'
            value= {data.email}
            onChange={change}
            ref={focusElement}
          /> 
        </div>
        {errors.email && <p>{errors.email}</p>}

        <div className='form-account-inputs'>
          <label
            className='form-account-label'
            htmlFor='password'
          >password</label>

          <input 
            id='password'
            type= 'password'
            name= 'password'
            className='form-account-input'
            placeholder='Enter your password'
            value= {data.password}
            onChange={change}
          />  
        </div>
        {errors.password && <p>{errors.password}</p>}

        <input type='submit' className= 'form-account-submit' placeholder='submit' />

        <h4 className='register-link'>
            <Link to='/register'>
              create account
            </Link>
        </h4>


      </form>
    </div>
  )
}

export default BoadLogin