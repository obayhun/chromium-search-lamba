const express = require('express') 
const sls = require('serverless-http') 
const puppetHelper = require('./helper/puppeteer')
const app = express() 



app.get('/search/:key',async (req, res) => {

  (async()=>{
      let json = await puppetHelper.search(req.params.key);
      res.json(json)
  })();

})
module.exports.server = sls(app)