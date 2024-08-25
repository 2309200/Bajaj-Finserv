const User = require("../models/User")

const createUser = async (req, res) => {
    try {
      const { status, userId, collegeEmail, collegeRollNumber, numbers, alphabets } = req.body;
  
      // Validation logic can go here
      if (!status || !userId || !collegeEmail || !collegeRollNumber || !numbers || !alphabets) {
        return res.status(400).json({
          is_success: false,
          message: "Missing required fields",
        });
      }
  
      // Compute highest lowercase alphabet
      const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
      const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? 
        lowercaseAlphabets.sort().reverse()[0] : '';
  
      const newUser = await User.create({
        status,
        userId,
        collegeEmail,
        collegeRollNumber,
        numbers,
        alphabets,
        highestLowercaseAlphabet,
      });
  
      return res.status(201).json({
        is_success: true,
        user_id: newUser.userId,
        status: newUser.status,
        collegeEmail: newUser.collegeEmail,
        collegeRollNumber: newUser.collegeRollNumber,
        numbers: newUser.numbers,
        alphabets: newUser.alphabets,
        highestLowercaseAlphabet: newUser.highestLowercaseAlphabet,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        is_success: false,
        message: "Internal server error",
      });
    }
  };
  
  // GET /bfhl
  const getAllUser = async (req, res) => {
    try {
      const users = await User.find(); // Corrected method
      return res.status(200).json({
        users, // Optionally include the users in the response if needed
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        is_success: false,
        message: "Internal server error",
      });
    }
  };
  
  
 
  
  module.exports = {
    getAllUser,
    createUser,
    
  };