var fs = require('fs');
var contents = JSON.parse(fs.readFileSync('./data/about.json',
'utf8'));

/* GET About page */
const about = (req, res) => {                    
    res.render('about', { title: 'Travlr Getaways', contents});     
};
  
module.exports = {                               
    about                                           
};  