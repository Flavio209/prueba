const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const { dirname } = require('path');
// settings
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);   // con esto tendran la extencion .html pero seran procesados por .ejs!!
// middlewares

// router
app.use(require('./routes/index'));

// static files 
app.use(express.static(path.join(__dirname,'public')))

// listening the server 
app.listen(app.get('port'), () => {
  console.log('server on port',app.get('port'));
});



