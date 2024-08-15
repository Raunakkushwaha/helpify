const Listing = require("../models/listing");

module.exports.rendertrending = async(req, res) => { 
    const allListings = await Listing.find({});
        res.render("listings/trending.ejs",{allListings});
        
    };