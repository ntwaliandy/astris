export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        auth: {
            user: 'put your own gmail account',
            pass: 'put your own gmail password'
        },
        tls: {
            ciphers:'SSLv3'
        }
    })

    const mailData = {
        from: 'ntwaliandy90@gmail.com',
        to: `${req.body.email}`,
        subject: `Astris Order confirmation for ${req.body.firstName} ${req.body.lastName}`,
        text: `Product Name: ${req.body.data.product_name} , Product Price: ${req.body.data.product_price}USD `,
    }

    transporter.sendMail(mailData, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })

    res.status(200)
  }