const express = require("express")
const routes = require('./routes')
const app = express()

app.use(express.json())
const port = process.env.PORT || 4000;

app.use("/items",routes.itemsRoutes)
app.use("/auth",routes.authRoute)

app.listen(port,()=> console.log(`Server running on port ${port}`))