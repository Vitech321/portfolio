import React from 'react'
import formLogic from './formLogic'
import validate from "./formValidate";

function FormSignUp({submitting}) {

    const { 

        handleChange, 
        handleSubmit, 
        values, 
        errors,
        refElement

    } = formLogic(validate, submitting) 

    
    
    

  return (
      
    <div className='form-content'>
    <form className='form' onSubmit={handleSubmit}>

        <h2 >contact form</h2>
        
        
        <div className='form-inputs'>
            <label htmlFor='title' className='form-label'
                style={{display:'inline-block'}}
            >title </label>
            <select 
                id='title'
                type='text'
                className='form-input-title'
                name='title'
                value={values.title}
                onChange={handleChange}
                ref={refElement}

            >
                <option value='Mr'>Mr</option>
                <option value='Miss'>Miss</option>
                <option value='Mrs'>Mrs</option>
            
            </select>
        </div>
        <div className='form-inputs'>
            <label htmlFor='name' className='form-label'>name </label>
            <input
                id='name'
                type='text'
                className='form-input-name'
                name='name'
                placeholder='Enter your name'
                value={values.name}
                onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor='surname' className='form-label'>surname </label>
            <input
                id='surname'
                type='text'
                className='form-input-surname'
                name='surname'
                placeholder='Enter your surname'
                value={values.surname}
                onChange={handleChange}
            />
            {errors.surname && <p>{errors.surname}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>email </label>
            <input
                id='email'
                type='email'
                className='form-input-email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor='message' className='form-label'>message</label>
            <textarea
                id='message'
                type='text'
                className='form-input-message'
                name='message'
                placeholder='Enter your message'
                value={values.message}
                onChange={handleChange}
                rows = {10}
                max='240'
            />
            {errors.message && <p>{errors.message}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor='recruiter' className='form-label'
                style={{display:'inline-block'}}
            >recruiter </label>
            <input
                id='recruiter'
                type='checkbox'
                className='form-input-recruiter'
                name='recruiter'
                placeholder='Enter your recruiter'
                checked={values.recruiter}
                onChange={handleChange}
            />
        </div>
        

        <button className='form-input-button' type='submit'>send</button>
        
    </form>
    </div>
  )
}

export default FormSignUp