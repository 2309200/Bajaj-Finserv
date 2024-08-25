const sortValues = async (req, res) => {
    try {
      const { data, isNumber, isAlphabet, highestLowerCaseAlphabet } = req.body;
  
      if (!data || !Array.isArray(data)) {
        return res.status(400).json({
          is_success: false,
          message: "Data should be an array of strings",
        });
      }
  
      // Separate numbers, alphabets, and find the highest lowercase alphabet
      const numbers = [];
      const alphabets = [];
      let highestLowercaseAlphabet = '';
  
      data.forEach(item => {
        if (!isNaN(item)) {
          numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
          alphabets.push(item);
          if (/^[a-z]$/.test(item) && item > highestLowercaseAlphabet) {
            highestLowercaseAlphabet = item;
          }
        }
      });
  
      // Static values for user_id, email, and roll_number
      const userId = "john_doe_17091999";
      const email = "john@xyz.com";
      const rollNumber = "ABCD123";
  
      // Build the response based on the flags
      const response = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
      };
  
      if (isNumber) {
        response.numbers = numbers;
      }
  
      if (isAlphabet) {
        response.alphabets = alphabets;
      }
  
      if (highestLowerCaseAlphabet) {
        response.highest_lowercase_alphabet = [highestLowercaseAlphabet];
      }
  
      return res.status(201).json(response);
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        is_success: false,
        message: "Internal server error",
      });
    }
  };

  const getOperationCode = (req, res) => {
    return res.status(200).json({
      operation_code: 1,
    });
  };
  
  module.exports = {
    sortValues,
    getOperationCode
  };
  