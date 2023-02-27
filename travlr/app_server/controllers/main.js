var fs = require('fs');
var contents = JSON.parse(fs.readFileSync('./data/index.json',
'utf8'));

/* GET homepage */
const index = (req, res) => {     
                  
    res.render('index', { title: 'Travlr Getaways', contents});     
};
  
module.exports = {                               
   index                                           
};  