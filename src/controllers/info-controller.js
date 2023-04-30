const { StatusCodes } = require('http-status-codes');

const info = (req,res) => {
    return res.status(StatusCodes.OK).json({
        success: true, //checks 
        message: 'Api is Live', //custom message
        error: {}, //error message
        data: {} // good data response
    })
}

module.exports = {
    info
}