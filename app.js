const express = require('express');
const puppetHelper = require('./helper/puppeteer')
const port = 3000
const app = express()


app.get('/search/:key', (req, res) => {

    (async()=>{
        let json = await puppetHelper.search(req.params.key);
        res.json(json)
    })();
 
})
app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
  })

