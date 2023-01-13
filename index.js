const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const checkDepartment=require('./routes/checkDepart.js');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(express.static(`${__dirname}`+`../frontend/public`))
app.get("/health",(req,res)=>{
res.send('ok');
});
app.use('/:dept',checkDepartment);
app.use('/:dept', routesHandler);


mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});



const PORT = 3000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
