const express = require('express');
const { City } = require('./models')
const { ServerConfig, Logger } = require('./config')
const apiRoutes = require('./routes')
const app = express();

// app.get('/api/v1/blogs' , (req,res)=>{
// });

app.use(express.json()); // helps to parse incoming json body
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes);
// app.use('/flightsService/api', apiRoutes);

// app.get('/home', (req, res) => {
//     return res.json({ msg: 'ok' });
// })

// console.log(process.env);
app.listen(ServerConfig.PORT, () => {
    console.log(`Suceesfully starting server on port: ${ServerConfig.PORT}`);

})

