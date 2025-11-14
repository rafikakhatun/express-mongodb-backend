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

        
    } catch (error) {
        
    }
}