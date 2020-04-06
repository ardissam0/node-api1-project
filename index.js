// console.log('\n === index.js executed! ===\n');

const express = require('express');

const server = express();

let users = [
    {
        id: 7,
        name: 'dummy seven',
        email: 'dummy7@dumdum.com',
        password: 'dummy123'
    }, 
];

//middleware
server.use(express.json());

//endpoints
server.get('/', (req, res) => {
    res.json({api: "running......."});
});

server.get('/api/users', (req, res) => {
    let users = [
        {
            id: 1,
            name: 'dummy one',
            email: 'dummy1@dumdum.com',
            password: 'dummy123'
        },
        {
            id: 2,
            name: 'dummy two',
            email: 'dummy2@dumdum.com',
            password: 'dummy123'
        },
        {
            id: 3,
            name: 'dummy three',
            email: 'dummy3@dumdum.com',
            password: 'dummy123'
        },
        {
            id: 4,
            name: 'dummy four',
            email: 'dummy4@dumdum.com',
            password: 'dummy123'
        },
        {
            id: 5,
            name: 'dummy five',
            email: 'dummy5@dumdum.com',
            password: 'dummy123'
        },
        {
            id: 6,
            name: 'dummy six',
            email: 'dummy6@dumdum.com',
            password: 'dummy123'
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

