// @author: Thomas Thompson
// @github: tomtom28
// @comment: Portfolio Page server


// Node Dependencies
var express = require('express');
var sendmail = require('sendmail')();
var bodyParser = require('body-parser');
 

// Set up Express
var app = express();
var router = express.Router();


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) {
  res.render('index.html')
});

// Email Form Submission (AJAX Endpoint)
router.post('/email/me', function(req, res){

  // Parse Response
  var senderEmail = req;
  console.log("hello")

  // Emailer Package
//   sendmail({
//     from: 'no-reply@yourdomain.com',
//     to: 'test@qq.com, test@sohu.com, test@163.com ',
//     subject: 'test sendmail',
//     html: 'Mail of test sendmail ',
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });

});


// Open Server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});