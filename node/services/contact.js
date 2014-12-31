var config= require('../../package.json').config



var nodemailer= require('nodemailer')
var mailer= nodemailer.createTransport(config.mailer.transport)



exports.sendContact= function (data) { return function (done) {

    var subject= [
        'Сообщение с сайта',
        'от', data.name, '('+data.email+')',
    ].join(' ')

    var message= [
        'Со страницы «Контакты» (http://belokor.awsmtek.com/#/contacts) отправлено сообщение ('+ (new Date()).toUTCString() +'):',
        '\n\n',
        data.message,
        '', '--',
        data.name,
        data.email,
        '\n\n',
        ,
    ].join('\n')

    var mail= {
        from: data.email,
        to: config.mailer.to,
        subject: subject,
        text: message,
    }

    mailer.sendMail(mail, function (err) {
        err= (err) ? err : null
        done(err, data)
    })

}}
