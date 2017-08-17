

// about server
var express = require('express'),
	app = express();
app.listen(80);


// // about router
// app.get('/', function(req, res) {
//     res.send('hello shanjiu22');
// });






var users = {

    notmap: {
        email: 'notmap@qq.com',
        website: 'http://www.notmap.com',
        blog: 'http://www.shanjiu.com'
    },

    whynot: {
        email: 'whynot@qq.com',
        website: 'http://www.whynot.com',
        blog: 'http://www.smallwhy.com'
    }
};

var findUserByUsername = function (username, callback) {
    if (!users[username]) {
        return callback(new Error('No user matching ' + username));
    }

    return callback(null, users[username]);
}

app.param('username',function(request, response, next, username){
    findUserByUsername(username, function(error, user){
        if(error) return next(error);
        request.user = user;
        next();
    });
});

// app.param('page', function(request, response, next, page){
//     console.log('the page is: ' + page);
//     next();
// });

// app.param('what', function(request, response, next, what){
//     console.log('the what is: ' + what);
//     next();
// });

// app.param(['username', 'page', 'what'],function(request, response, next, value){
//     console.log('the value is: ' + value);
//     next();
// });



app.get('/user/:username/:page/:what', function (request, response, next) {
	console.log(typeof app.path());
	response.send(request.user.website);
    // return response.render('user', request.user);
});

app.get('/admin/:username', function (request, response, next) {
	console.log(app.path());
	response.send(request.user.website);
    // return response.render('admin', request.user);
});



