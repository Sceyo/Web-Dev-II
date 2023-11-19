const router = require("express").Router()
const items = []


router.get("/", async (request,response) => {

    return response.status(200).json({data: items})

});

router.get("/:id", async (request,response) => {
    const foundItem = items.find(obj => obj.id == Number(request.params.id))

    if(!foundItem){
        return response.status(404).json({message: "Item not found"})
    }

    return response.status(200).json({data: foundItem})

});

//test this please
router.delete("/:id", (request, response) => {
    const itemId = Number(request.params.id);
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }

    // Remove the item from the array
    items.splice(itemIndex, 1);

    return response.status(200).json({ message: "Item deleted successfully" });
});

//test this please
router.put("/:id", (request, response) => {
    const itemId = Number(request.params.id);
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }

    // Update the item's name with the new value from the request body
    items[itemIndex].name = request.body.name;

    return response.status(200).json({ message: "Item updated successfully", data: items[itemIndex] });
});




router.post("/",async (request,response) =>{
    const obj = {
        id: items.length + 1,
        name: request.body.name,
    };
    
    items.push(obj)

    return response.status(201).json({message:"Succesfully added an obj" })
})

module.exports = router