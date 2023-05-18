// Dependinces
const express = require('express')
const app = express()

module.exports() = {

    listen: async function(port){

        app.listen(port)

    },

    get: async function(location, responseType, response){

        app.get(`/${location}`, function (req, res) {

            if(responseType == "json"){
                res.json( { response } )
            } else if(responseType == "text"){
                res.send(response)
            }
            
        })

    }

}