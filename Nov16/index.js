const express = require("express")
const routes = require("./routes")
const app = express()

app.use(express.json()) //para maka pass kas json file to the front end

const port = process.env.PORT || 3000

// app.get("/hello", async (request,response) => {

//     return response.status(200).json({message: "Hello, World"})

// });



//create update and delete

app.use("/items",routes.itemsRoutes)
app.use("/auth",routes.authRoute)
app.listen(port, () => console.log(`Server running on port ${port}`));