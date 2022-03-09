import { useEffect, useState } from "react";
import axios from "axios";


export default function FormLogic(validate, callback) {


    const initialValues = {

        title:'Mr',
        name:'',
        surname:'',
        email:'',
        message:'',
        recruiter: false
        
    }
    const [values,setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    
    
    const handleChange = e => {

        const isCheckbox = e.target.type === 'checkbox'
        const { name, value } = e.target

        

        setValues({
            ...values,
            [name]: isCheckbox 
                ? e.target.checked 
                : typeof(value) === 'string'
                    ? value
                    : value
    
        })

        
    }

    

    const handleSubmit = async e => {

        e.preventDefault()
        setErrors(validate(values))
        setSubmit(true)
        
    }

    const sendValues = async () => {

        try{
            await axios.post('http://localhost:3002/form/', JSON.stringify(values))
            .then(res => console.log(res.data, 'ciao'))

        } catch(err) {

            console.log('email error: ', err);
        }

    } 


    useEffect(()=>{

        if(Object.keys(errors).length === 0 && submit) {

            callback()

            sendValues()

        }
        // eslint-disable-next-line
    },[errors])

    
    

    return { 

        handleChange, 
        handleSubmit,
        values, 
        errors
    }    

    
}