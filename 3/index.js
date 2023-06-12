//express
const express = require('express');
const bodyParser = require('./middlewares/bodyParser')

const controllers = require('./controllers/main');
const app = express();

app.use(bodyParser.parser); //for parsing application/json

app.get('/',controllers.health); 
app.get('/info',controllers.appInfo); //localhost:3000/info
app.get('/sum',controllers.sum);
 //14:13 3.2 video


app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});