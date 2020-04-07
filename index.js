// console.log('\n === index.js executed! ===\n');

const express = require('express');
// const shortid = require('shortid');

const server = express();

let users = [
    {
        id: '',
        name: 'dummy',
        bio: 'dum dum dum dum dum dum dum '
    }, 
];

//middleware
server.use(express.json());

//endpoints
server.get('/', (req, res) => {
    res.json({api: "running......."});
});



server.get('/api/users', (req, res) => {
    res.status(200).json(users);
});



server.get(`/api/users/:id`, (req, res) => {
    const userid = req.params;
    const fUser = users.find(user => user.id == {userid})
    res.status(201).json(fUser)
});




server.post('/api/users', (req, res) => {
const userInfo = req.body;

users.push(userInfo);

res.status(201).json(users);

});



const port = 5000;

server.listen(port, () => console.log(`\n === api on port ${port} ===\n`));

