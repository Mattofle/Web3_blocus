const Book = ({persons}) => {
    return (
        <div>
            <h1>Names</h1>
            <ul>
                {persons.map((person, index) => (
                <li key={index}>{person.name}</li>
                ))}
      </ul>
        </div>
    );
}

export default Book;