const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test')
mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) =>{
        console.warn('Warning', error);
    });

beforeEach(()  => {
    //delete all users in users collection
    mongoose.connection.collections.users.drop(()=>{
        //done()
    });
})
