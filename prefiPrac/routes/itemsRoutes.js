const authenticateToken = require("../middlewares/authenticateToken")
const router = require("express").Router()
const items = []

router.get("/hello",async (request,response) =>{
    return response.status(200).json({message: "hello World"})
});

router.get("/list",async (request,response) => {
    return response.status(200).json({data: items})
})

router.get("/list/:id",async(request,response) => {
    // const id = Number(request.params.id)
    const foundItem = items.find(obj => obj.id == Number(request.params.id))

    if(!foundItem){
        return response.status(404).json({message: "Item not found"})
    }

    return response.status(200).json({data: foundItem})
})

router.put("/list/:id",async(request,response) => {
    const id = Number(request.params.id);
    const index = items.findIndex((item)=> item.id === id)

    if (index === -1){
        return response.status(404).json({message: "Item not found"})

    }

    items[index].name = request.body.name

    return response.status(200).json({message: "Item updated"})
})

router.delete("/list/:id",async(request,response) =>{
    const id = Number(request.params.id);
    const index = items.findIndex((item)=> item.id === id)

    if (index === -1){
        return response.status(404).json({message: "Item not found"})
    }

    items.splice(index,1)

    return response.status(200).json({message: "Item deleted successfully"})

})


router.put("/list/:id",async (request,response) => {

    const id = Number(request.params.id);
    const index = items.findIndex((item)=> item.id === id)
    
    if(index === -1){
        return response.status(404).json({message: "Not found"})
    }
    items[index].name = request.body.name;

    return response.status(201).json({message: "Successfully updated"})
})

router.post("/",authenticateToken,async(request,response) =>{
    const obj ={
        id: items.length +1,
        name: request.body.name,
    }
    items.push(obj)

     return response.status(201).json({message:"Successfully added an objective"})
})


module.exports = router;