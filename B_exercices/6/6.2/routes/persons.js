const router = require('express').Router()
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Person = require('./models/persons.js')


app.use(express.json()) // Ajoutez cette ligne pour analyser les requêtes JSON


router.get("/", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  Person.findById(id).then(person => {
    if (person) {
      res.json(person)
    }
    else {
      throw new Error("Person not found")
    }
  })
})

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  Person.findByIdAndDelete(id).then(() => {
    res.status(204).end()
  })
})

router.post("/", (req, res) => {
  const body = req.body

  // Check body
  const errorMessages = []
  if (!body.name) errorMessages.push("name must be present")
  if (!body.number) errorMessages.push("number must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }

  // Check existing
  Person.find({ name: body.name })
    .then(person => {
      if (person && person.length > 0) {
        errorMessages.push("name must be unique")
        res.status(422).json({ errorMessages })
      } else {
        // Insert
        const person = new Person(body)
        person.save().then(result => {
          res.json(result)
        })
          .catch(err => next(err))
      }
    })
    .catch(err => next(err))
})

router.put("/:id", (req, res) => {
  const body = req.body

  // Check body
  const errorMessages = []
  if (!body.name) errorMessages.push("name must be present")
  if (!body.number) errorMessages.push("number must be present")
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages })
    return
  }

  // Update
  const person = {
    name: body.name,
    number: body.number,
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson)
      } else {
        throw new NotFoundError()
      }
    })
    .catch(error => next(error))
})


module.exports = router
