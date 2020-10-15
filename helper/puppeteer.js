const puppeteer = require('puppeteer');


module.exports.search = async function (text){
   
    try{
        
   
        const browser=await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto("https://google.com", {timeout: 30000});
        await page.waitForSelector('.gLFyf.gsfi', {timeout:300000});
        await page.type('.gLFyf.gsfi', text);
        await page.focus(".gLFyf.gsfi");
        await page.keyboard.press('Enter')
        await page.waitForSelector('.yuRUbf');
        let parent = await page.$$('.yuRUbf');
        let json = [];
        for(let i = 0; i< parent.length; i++){
            let title = await parent[i].$eval('h3.LC20lb', i => i.textContent);
            let link  = await parent[i].$eval('a', a => a.getAttribute('href'));
            json.push({title:title, link:link});
        }
        await delay(4000)
        
      return json;
    
    page.close();
    await browser.close();
    
        
    
    
       
    }catch(e){
        console.log('Our error ', e);
    }
        
    }



    function delay(timeout) {
        return new Promise((resolve) => {
          setTimeout(resolve, timeout);
        });
      }
    