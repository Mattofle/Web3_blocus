import bookService from 'services/books'
import { useState, useEffect } from 'react'
import NavBar from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [books, setBooks] = useState([])

  const hook = () => {
    bookService
      .getAll()
      .then(initialBooks => {
        setBooks(initialBooks)
      })
  }

  useEffect(hook, [])

  const updateBookState = (id, newState) => {
    const book = books.find(b => b.id === id)
    const changedBook = { ...book, state: newState }

    bookService
      .update(id, changedBook)
      .then(returnedBook => {
        setBooks(books.map(book => book.id === id ? returnedBook : book))
      })
      .catch(error => {
        alert(
          `${error}`
        )
        setBooks(books.filter(b => b.id !== id))
      })
  }

  const handleStateChange = (id, newState) => {
    updateBookState(id, newState);
  };

  const fullBookContext = {
    books,
    setBooks,
    updateBookState,
    handleStateChange,
  }

  return (
    <>
      <NavBar />
      <Outlet context={fullBookContext} />
    </>
  )
}

export default App
