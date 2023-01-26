var fs = require('fs');
var mealData = JSON.parse(fs.readFileSync('./data/meals.json',
'utf8'));

/* GET Meals page */
const meals = (req, res) => {                    
    res.render('meals', { title: 'Travlr Getaways', mealData});     
};
  
module.exports = {                               
   meals                                           
};  