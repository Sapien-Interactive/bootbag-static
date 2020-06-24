const sg = require('@sendgrid/mail')

sg.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (req, res) => {
  const {
    body: { email }
  } = req

  const mailData = {
    to: email,
    from: 'noreply@bootbag.co',
    subject: 'Welcome to Bootbag.',
    templateId: 'd-7962c11e390542a6b13620edd8b37825',
    substitutions: {
      '{{LINK}}': 'https://bootbag.co'
    }
  }

  sg.send(mailData, false)
    .then(() => res.status(200).end())
    .catch((err) => {
      console.log(err)
      res.status(400).end()
    })
}
