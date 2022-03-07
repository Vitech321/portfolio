
export default function validate(values) {

    const errors = {}

    /* VALIDATE NAME AND SURNAME */

    if(!values.name.trim()) {
        errors.name= 'name is required'
    }

    if(!values.surname.trim()) {
        errors.surname= 'surname is required'
    }


    /* VALIDATE EMAIL */

    if(!values.email.trim()) {
        errors.email= 'email is required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email='email address is invalid'
    }

    /* VALIDATE MESSAGE */

    if(!values.message.trim()) {
        errors.message= 'message is required'
    } else if ( values.message.length < 15) {
        errors.message = 'the message must have at least 15 characters'
    }  else if ( values.message.length > 240) {
        errors.message = 'the message cannot have more than 240 characters'
    }
    



    return errors 
}