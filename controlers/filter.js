const Listing = require("../models/listing");

module.exports.renderfilter = async(req, res) => { 
    let filter=req.query.search;
    const allListings = await Listing.find({category:filter});
      res.render("listings/filter.ejs",{filter,allListings});
    };