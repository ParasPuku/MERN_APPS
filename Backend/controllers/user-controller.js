const User = require("../models/user");

const getAllUsers = ( async (req, res, next) => {
    let users;
    try{
        users = await User.find();
    } catch(error) {
        console.log('Error', error)
    }

    if(!users) {
        return res.status(404).json({message: 'No record found'})
    } 
    return res.status(200).json({users})
})

module.exports = {getAllUsers};