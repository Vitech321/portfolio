import React, { useEffect, useRef, useState } from 'react'

function Register() {

  const initialValues = {

    username: '',
    email: '',
    password: '',
    password2: ''
    
  }

  const [data, setData] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)
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
    let userNoSpace = data.username.replace(' ', '')

    if(!data.username.trim()) {
      err.username = 'username is required'
    } else if(data.username.length !== userNoSpace.length) {
      err.username = 'you cannot use the space'
    } else if ( data.username.length < 5) {
      err.username = 'min 5 characters'
    } else if ( data.username.length > 12) {
        err.username = 'max 12 characters'
    }


    if(!data.email.trim()) {
      err.email= 'email is required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
        err.email = 'email address is invalid'
    }


    if(!data.password.trim()) {
      err.password = 'password is require'
    } else if ( data.password.length < 5) {
      err.password = 'min 5 characters'
    } else if ( data.password.length > 12) {
        err.password = 'max 12 characters'
    }


    if(!data.password2.trim()) {
      err.password2 = 'password is require'
    } else if (data.password.length !== data.password2.length) {
      err.password2 = "password doesn't match"
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
    }
  
  // eslint-disable-next-line
  }, [errors])
  


  return (
      
    <div className='register'>
      
      <form 
        className='form-account-content'
        onSubmit={submitForm}>
        
        <h2 className='form-account-label'>register</h2>

        <div className='form-account-inputs'>
          <label
            className='form-account-label'
            htmlFor='email'
          >username</label>

          <input 
            id='username'
            type= 'username'
            name= 'username'
            className='form-input-input'
            placeholder='Enter your username'
            value= {data.username}
            onChange={change}
            ref={focusElement}
          /> 
        </div>
        {errors.username && <p>{errors.username}</p>}

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

        <div className='form-account-inputs'>
          <label
            className='form-account-label'
            htmlFor='password'
          >repeat password</label>

          <input 
            id='password2'
            type= 'password'
            name= 'password2'
            className='form-account-input'
            placeholder='Enter your password'
            value= {data.password2}
            onChange={change}
          />  
        </div>
        {errors.password2 && <p>{errors.password2}</p>}

        <input type='submit' className= 'form-account-submit' placeholder='submit' />

      </form>
    </div>
  )
}

export default Register