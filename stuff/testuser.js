

var User = require('./login')

var Amanda = new User({
    name: 'Amanda',
    email: 'a.ebert',
    pass: 'test'
});

/*
Amanda.save(function (err, User) {
    if (err) {
        console.log("error")
    };
    console.log('User saved')

})
*/

User.find({}, function (err, user) {
    if (err) throw err;

    console.log(user)

})