import mongoose from 'mongoose'

if (process.argv.length<3) {
  console.log('give password as argument Missing required arguments!\n\nUsage: npm start <server> <username> <password> <cluster> [<name> <number>]\n ')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://${username}:${password}@${server}.h3uus.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=${cluster}`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
})

const Person = mongoose.model('Note', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
} else {  
  const person = new Person({
    name: process.argv[3],
    phoneNumber: process.argv[4],
  })

  person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}

/* Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })*/