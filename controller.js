
const checkWordCount = (req, res) => {
    const payload = req.body.str;
  
    // Using regex to check if there are at least 8 words
    const wordCount = (payload.match(/\b\w+\b/g) || []).length;
    if (wordCount >= 8) {
      
      res.status(200).send('OK');
    } else {
      
      res.status(406).send('Not Acceptable');
    }
  };
  
  module.exports = {
    checkWordCount,
  };
  