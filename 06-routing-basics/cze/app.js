const express = require("express")
const app = express()

require("dotenv").config()

const router = express.Router()
app.use("/", router)

router.get("/students", (req, res) => {
  const students = [
    { id: 1, firstname: "Petr", surname: "Novák", nationalId: "123456789" },
    { id: 2, firstname: "Jana", surname: "Nováková", nationalId: "987654321" },
    { id: 3, firstname: "Klára", surname: "Novotná", nationalId: "456789123" },
  ]

  res.json(students)
})

router.get("/classrooms", (req, res) => {
  const classrooms = [
    { id: 1, name: "Quinta" },
    { id: 2, name: "Sexta" },
    { id: 3, name: "Septima" },
    { id: 4, name: "Octava" },
  ]

  res.json(classrooms)
})

app.listen(process.env.PORT, () =>
  console.log(`Aplikace běží na portu ${process.env.PORT}`)
)
