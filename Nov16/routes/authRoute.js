const router = require("express").Router()
const jwt = require("jsonwebtoken")

const users = []

router.post('/register', async (request,response) => {
    const newUser = {
        email: request.body.email,
        password: request.body.password,
    }
    users.push(newUser)

    response.status(201).json(
        {message: "Account Registration succesful."}
    )
})

router.post('/login', async (request,response) => {
    
    try{
        const user = users.find(obj => obj.email == request.body.email)
    
        if(!user) return response.status(404).json({message: "User not found."})
    
        const isPasswordValid = user.password == request.body.password
    
        if(!isPasswordValid) return response.status(400).json({message: "invalid password"})
    
            const token = jwt.sign({email: user.email},"12345678",{
                expiresIn: 86400,
            })
    
        response.status(200).json({
            user,
            accessToken: token,
    
        })
    }catch(e){
        console.log("error")
    }
})

module.exports = router