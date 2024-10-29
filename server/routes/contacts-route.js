const express = require("express")
const pool = require("../db/db.js")

const router = express.Router()

//Получение всех контактов
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts")
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//Добавление нового контакта
router.post("/", async (req, res) => {
  try {
    const { name, phone } = req.body
    await pool.query(
      "INSERT INTO contacts (full_name, phone) VALUES ($1, $2)",
      [name, phone]
    )

    res.status(200).json({ message: "Successfully added" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//Удаление контакта
router.delete("/", async (req, res) => {
  try {
    const { id } = req.body
    const findContact = await pool.query(
      "SELECT id FROM contacts WHERE id=$1",
      [id]
    )

    //Проверка наличия  контакта
    if (!findContact.rows.length === 0)
      return res.status(404).json({ error: "Todo Not Found" })

    //Удаление контакта при его наличии
    await pool.query("DELETE FROM contacts WHERE id = $1", [id])

    res.status(200).json({ message: "Contact Deleted Successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
