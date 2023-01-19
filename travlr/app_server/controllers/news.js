var fs = require('fs');
var panel = JSON.parse(fs.readFileSync('./data/news.json',
'utf8'));


/* GET News page */
const news = (req, res) => {                    
    res.render('news', { title: 'Travlr Getaways', panel });     
};
  
module.exports = {                               
   news                                           
};  