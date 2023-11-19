const router = require("express").Router()
const jwt = require("jsonwebtoken")

const users = []

router.post("/register",async (request,response) => {
    const newUser ={
        email : request.body.email,
        password : request.body.password
    }

    users.push(newUser)

    response.status(200).json({
        message: "Registered Successfully"
    })
})

router.post("/login",async (request, response) => {
    const user = users.find((obj) => obj.email === request.body.email)

    if(!user) response.status(404).json({message: "Wrong Email"})

    const passValid = user.password === request.body.password

    if(!passValid) return response.status(404).json({message: "Wrong password"})

    const token = jwt.sign({email: user.email},"12345678",{
        expiresIn: 86400,
    })

    response.status(200).json({
        user,
        accessToken: token,
    })
})


module.exports = router