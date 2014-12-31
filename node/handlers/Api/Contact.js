module.exports= ContactApi

var ApiRouter= require('koa-router')

var contactService= require('../../services/contact')



function ContactApi() {
    var api= new ApiRouter



    api.post('/api/v1/contact', function * () {
        try {
            var data= this.request.body
            if (data && (data.name || data.email) && data.message) {

                this.body= yield contactService.sendContact({
                    name: (data.name) ? data.name.substring(0,37).trim() : null,
                    email: (data.email) ? data.email.trim() : null,
                    message: data.message.trim(),
                })

                this.body= data

            } else {
                this.status= 400 // Bad Request
            }

        } catch (err) {
            console.error(err)
            this.status= 500 // Bad Request
        }
    })



    return api
}
