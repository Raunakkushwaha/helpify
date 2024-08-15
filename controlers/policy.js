const Listing = require("../models/listing");

module.exports.renderpolicy = async(req, res) => { 
    res.render("listings/policy.ejs");
    };

    module.exports.rendercontact = async(req, res) => { 
        res.render("listings/contact.ejs");
        };