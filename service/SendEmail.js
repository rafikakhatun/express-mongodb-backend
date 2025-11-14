const nodemailer = require("nodemailer");

const sendEmail = async(to,subject,text,html) =>{
    try {
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'rafikakhatun607@getMaxListeners.com',
                pass:'adme hlvo zmbu ztyt',
            }

        });

        const mailOptions ={
            from:"rafikakhatun607@gmail.com",
            to:to,
            subject:subject,
            text:text,
            html:html,
        }

     const info =  await transporter.sendMail(mailOptions);
     console.log("email send successfully:",info)
     return true;

    } catch (error) {

        console.error("Error sending email",message)
        
    }
}