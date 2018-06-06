var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

url = 'http://theresalfriess.com/works/1';

request(url, function (error, response, html) {
    var $ = cheerio.load(html);

    

    const tds = $('.smallGridTable td').each((i, element) => {
        let image = $(element).find("img").attr('src');
        
        if (!image) { 
            return;
        }
        
        const smallest = `http:${image.split('?')[0]}`
        const biggest = `${smallest.replace('smallest', 'biggest')}`
        
            const filename = smallest.replace(/^.*[\\\/]/, "")

            request(smallest)
                .pipe(fs.createWriteStream('./images/thumbnails/' + filename))
        
          request(biggest).pipe(fs.createWriteStream("./images/fullsize/" + filename))
    })
})