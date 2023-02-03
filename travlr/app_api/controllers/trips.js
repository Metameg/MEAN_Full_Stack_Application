const mongoose = require('mongoose');
const model = mongoose.model("trips");

// GET: /travel - lists all the trips
const tripsList = async (req, res) => {
    model
        .find({})  // empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "messge": "trips not found" });
            } else if (err) {
                return res  
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// GET: /travel/:tripCode - returns a singe trip
const tripsFindByCode = async (req, res) => {
    model
        .find({'code': req.params.tripCode})
        .exec((err, trip) =>  {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "messge": "trips not found" });
            } else if (err) {
                return res  
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        
        });
}

module.exports = {
    tripsList,
    tripsFindByCode
}