require("dotenv").config()
const express = require("express")
const cors = require("cors")
const contactsRoute = require("./routes/contacts-route.js")

const app = express()
const PORT = process.env.PORT || 4000

// Настраиваем middleware для обработки JSON
app.use(express.json())
// Включаем CORS для обработки кросс-доменных запросов
app.use(cors())

// Подключаем маршруты для работы с контактами
app.use("/contacts", contactsRoute)

app.listen(PORT, console.log(`Server is running on port ${PORT}`))
