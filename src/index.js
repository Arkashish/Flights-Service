const express = require('express');

const { ServerConfig,Logger } = require('./config')
const apiRoutes = require('./routes')
const app = express();

// app.get('/api/v1/blogs' , (req,res)=>{

// });
app.use('/api', apiRoutes);
// console.log(process.env);
app.listen(ServerConfig.PORT, () => {
    console.log(`Suceesfully starting server on port: ${ServerConfig.PORT}`);
    Logger.info("Successfully started server","root",{})
})