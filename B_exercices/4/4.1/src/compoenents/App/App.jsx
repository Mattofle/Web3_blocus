import { useState, useEffect } from 'react'
import Book from '../Book/Book'
import phonebookService from '../../Services/phonebookService'

const App = () => {
  /* const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number:'040-1234567'
    }
  ]) 
    */

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('effect')
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('error' , error)
      })
  }
  useEffect(hook, [])

  const addPerson = (event) => {
    if(persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    phonebookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Book persons={persons} />
    </div>
  )
}

export default App