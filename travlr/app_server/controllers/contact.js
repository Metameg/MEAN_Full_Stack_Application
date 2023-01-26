var fs = require('fs');
var rows = JSON.parse(fs.readFileSync('./data/contact.json',
'utf8'));

/* GET Contact page */
const contact = (req, res) => {                    
    res.render('contact', { title: 'Travlr Getaways', rows });     
};
  
module.exports = {                               
   contact                                           
};  