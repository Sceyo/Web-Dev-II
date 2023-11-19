const express = require("express")

const app = express()

app.use(express.json()) //para maka pass kas json file to the front end

const port = process.env.PORT || 3000

const items = []

app.get("/hello", async (request,response) => {

    return response.status(200).json({message: "Hello, World"})

});

app.get("/items", async (request,response) => {

    return response.status(200).json({data: items})

});

app.get("/items/:id", async (request,response) => {
    const foundItem = items.find(obj => obj.id == Number(request.params.id))

    if(!foundItem){
        return response.status(404).json({message: "Item not found"})
    }

    return response.status(200).json({data: foundItem})

});

//Delete 
app.delete("/items/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Item not found" }); //to check if item is found
    }

    items.splice(index, 1); //diri mag delete

    return response.status(200).json({ message: "Item deleted successfully" });
});

//Update
app.put("/items/:id", (request, response) => {
    const id = Number(request.params.id);
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
        return response.status(404).json({ message: "Item not found" });//to check if item is found
    }

    items[index].name = request.body.name; //diri dapit mag update 

    return response.status(200).json({ message: "Item updated successfully"});
});




app.post("/add-items", async (request,response) =>{
    const obj = {
        id: items.length + 1,
        name: request.body.name,
    };
    
    items.push(obj)

    return response.status(201).json({message:"Succesfully added an obj" })
})

//create update and delete
app.listen(port, () => console.log(`Server running on port ${port}`));