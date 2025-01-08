import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const BookPage = () => {
  const { 
    books,
    handleStateChange,
   } = useOutletContext();

   const [selectedStates, setSelectedStates] = useState({});

  const handleSelectChange = (id, newState) => {
    setSelectedStates({ ...selectedStates, [id]: newState });
  };

  return (
    <div>
      <h1>Books</h1>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.state}</td>
              <td>
                <select
                  value={selectedStates[book.id] || book.state}
                  onChange={(e) => handleSelectChange(book.id, e.target.value)}
                >
                  <option value="to_read">To Read</option>
                  <option value="reading">Reading</option>
                  <option value="read">Read</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleStateChange(book.id, selectedStates[book.id] || book.state)}>
                  Mettre à jour l’état
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookPage;
