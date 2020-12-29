const express = require('express');
const app = express();
const ctrl = require('./controller')

app.get('/',(req, res) => {
    res.send('Home screen');
})
app.get('/api/test',(req, res) => {
    res.send('is this what youre looking for?')
})

app.get('/api/reject',(req, res)=>{
    res.status(400).send('this was a no no')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/user/:id', ctrl.getSingleUser)


app.listen(3456,() => console.log('Listening on port 3456'));