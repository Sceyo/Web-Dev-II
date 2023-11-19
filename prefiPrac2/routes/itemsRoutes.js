const authenticateToken = require('../middlewares/authenticateToken')
const router = require("express").Router()
const items = []

router.get("/home",async(request,response)=>{
    return response.status(200).json({message: "Hello World"})
});

router.post("/",async(request,response) =>{
    const newObj = {
        id: items.length +1,
        name: request.body.name 
    }
    items.push(newObj)

    return response.status(201).json({message: "Added successfully"})
})

router.get("/list",authenticateToken,async(request,response) => {
    return response.status(201).json({data: items})
})

router.get("/list/:id", async(request,response) =>{
    const foundItem = items.find((obj)=> obj.id === Number(request.params.id))

    if(!foundItem){
        return response.status(404).json({message: "Not Found"})
    }

    return response.status(201).json({data: foundItem})

})

router.put("/list/:id", async(request,response) => {
    const id = Number(request.params.id)
    const index = items.findIndex((obj) => obj.id === id)

    if(!index){
        return response.status(404).json({message: "Not Found"})
    }

    items[index].name = request.body.name

    return response.status(201).json({message:"updated successfully"})

})

router.delete("/list/:id", async(request,response) =>{
    const id = Number(request.params.id)
    const index = items.findIndex((obj)=> obj.id === id)

    if(!index){
        return response.status(404).json({message: "Not Found"})
    }

    items.splice(index,1)
    
    return response.status(201).json({message: "Deleted successfully"})

})




module.exports = router