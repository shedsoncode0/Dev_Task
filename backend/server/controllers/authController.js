const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

// Register a new user
const register = async (req, res) => {
    // Get all the user details from the request Body
    const { fullname, email, password } = req.body; 

    // Check if Email already exist in the database
    const emailExit = await User.findOne({ email });
    if (emailExit) return res.status(400).send("Email already exist");

    //Hashing the user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
        email,
        fullname,
        password: hashedPassword,
    });

    // Save the user to the database and check for any error
    try {
        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const login = async (req, res) => {
     // Get all the user details from the request Body
     const { email, password } = req.body; 
 
     if (!email || !password) return res.status(400).send("please fill all fields");

     try {
         // Check if username exit
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send("email not found");

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) return res.status(400).send("Incorrect password");

        res.status(200).json(user);
     } catch (error) {
        res.status(500).json({error: error.message});
     }
}

module.exports = {
    register,
    login
}