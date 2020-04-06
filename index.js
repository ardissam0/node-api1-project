// console.log('\n === index.js executed! ===\n');

const express = require('express');

const server = express();

let users = [
    {
        id: 7,
        name: 'dummy seven',
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
    const users = [
        {
            id: 1,
            name: 'dummy one',
            bio: 'dum dum dum dum dum dum dum '
        },
        {
            id: 2,
            name: 'dummy two',
            bio: 'dum dum dum dum dum dum dum '
        },
        {
            id: 3,
            name: 'dummy three',
            bio: 'dum dum dum dum dum dum dum '
        },
        {
            id: 4,
            name: 'dummy four',
            bio: 'dum dum dum dum dum dum dum '
        },
        {
            id: 5,
            name: 'dummy five',
            bio: 'dum dum dum dum dum dum dum '
        },
        {
            id: 6,
            name: 'dummy six',
            
        },
    ];
    res.json(users);
});

server.post('/api.users', (req, res) => {
const userInfo = req.body;

users.push(userInfo);

res.status(201).json(users);

});

const port = 5000;

server.listen(port, () => console.log(`\n === api on port ${port} ===\n`));

