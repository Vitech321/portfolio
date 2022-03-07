import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'

function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitting() {

    setIsSubmitted(true)
    
  }
  

  return (
    <>
      {
        !isSubmitted
          ? <FormSignUp submitting={submitting} />
          : <FormSuccess />
      }
        
        
    </>
  )
}

export default Form