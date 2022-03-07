const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')



const auth = {

    auth: {
        api_key: process.env.MGAPIKEY,
        domain: process.env.MGDOMAIN
    }
}


const transporter = nodemailer.createTransport(mailGun(auth))


function emailMe(title, name, surname, email, message, recruiter, cb) {  

    const  mailOptions = {
        from: process.env.MGFROM,
        to: process.env.MGTO,
        subject: `FORM PORTFOLIO MAIL FROM: ${name + surname}`,
        text: `
                title: ${title},
                name: ${name},
                surname: ${surname},
                email: ${email},
                recruiter: ${recruiter}
                message:
                ${message}
            `
    }
    
    transporter.sendMail(mailOptions)
        .then((res)=>console.log('sent'))
        .catch((err)=>console.log(err)) 

}

module.exports = emailMe


