const assert = require('assert');
const User = require('../src/user')


describe('Creating records' , () => {
    it('saves a user', () => {
        const joe = new User({name: 'Pie'})
        
        joe.save();
    });
})