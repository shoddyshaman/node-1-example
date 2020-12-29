let data = require('./data.json')

module.exports = {
    getAllUsers: (req, res) =>{
        const {email} = req.query
        //req.params /// req.query /// req.body
        if(!email) return res.status(200).send(data)
        const filteredUsers = data.filter(e => e.email.includes(email))
        res.status(200).send(filteredUsers)
    },
    getSingleUser: (req, res) => {
        // console.log(req.params)
        const {id} = req.params
        const user = data.find(element => element.id === +id)
        if(!user) return res.sendStatus(404)
        res.status(200).send(user)
    }
}

