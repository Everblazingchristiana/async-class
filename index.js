const express = require("express")
const connectDB = require("./Database/Db")
const studentRoute = require("./Routes/StudentRoute")
const bodyparser = require("body-parser")

require("dotenv").config()
const app = express();
const port = process.env.PORT
connectDB()


app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(studentRoute)







app.listen(port, () => {
    console.log(`server started successfullty. http://localhost:${port}`)
})