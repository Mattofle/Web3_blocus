const router = require('express').Router()
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Book = require('../models/books')

app.use(express.json())

router.get('/', (request, response) => {
    Book.find({}).then(books => {
      response.json(books)
    })
  })


  router.post('/:id/comments', (request, response, next) => {
    const { username, comment } = request.body

  // Vérification de la longueur du commentaire
  if (comment.length <= 5) {
    return response.status(400).json({ error: 'Comment must be more than 5 characters' })
  }

  // Vérification de la longueur du username
  if (username.length <= 3) {
    return response.status(400).json({ error: 'Username must be more than 3 characters' })
  }

  Book.findById(request.params.id)
    .then(book => {
      if (!book) {
        return response.status(404).json({ error: 'Book not found' })
      }

      // Vérification si l'utilisateur a déjà commenté ce livre
      const userCommented = book.comments.some(c => c.username === username)
      if (userCommented) {
        return response.status(400).json({ error: 'User has already commented on this book' })
      }

      const newComment = { username, comment }

      Book.findByIdAndUpdate(
        request.params.id,
        { $push: { comments: newComment } },
        { new: true, runValidators: true, context: 'query' }
      )
        .then(updatedBook => {
          if (updatedBook) {
            response.json(updatedBook)
          } else {
            response.status(404).end()
          }
        })
        .catch(error => next(error))
    })
    .catch(error => next(error))
  })


module.exports = router