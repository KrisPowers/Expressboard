/*!

 * expressboard
 * Copyright(c) 2023 Kris Powers
 * MIT Licensed
  
*/

// Express
const express = require('express')
const app = express()

// Quick DB
const { QuickDB } = require("quick.db");
const db = new QuickDB();

'use strict';

module.exports = {

    go: async function ( port ) {

        app.listen(port)

        app.get('/dashboard', function (req, res) {
            
            res.send('Hello World')

        })

        console.log('[Express Dashboard]\nView dashboard at: http://localhost:' + port + '/dashboard')
        
        
    },

    onEvent: async function ( type ) {
        
        if( type == 'siteRequest' ){

            (async () => {

                await db.add("dashboard.siteRequest", 1);
                
            })

        }
        
    },

}