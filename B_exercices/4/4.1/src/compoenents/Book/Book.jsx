const Book = ({persons}) => {
    return (
        <div>
            <h1>Names</h1>
            <ul>
                {persons.map(person => 
                    <li key={person.name}>{person.name} {person.number}</li>
                )}
      </ul>
        </div>
    );
}

export default Book;