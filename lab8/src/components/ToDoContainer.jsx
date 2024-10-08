import { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import TaskSearch from "./TaskSearch";

function ToDoContainer() {
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setData] = useState([]);

  function handleEditBook(book) {
    setData((prev) => prev.map((b) => (b.id === book.id ? book : b)));
  }

  function handleAddBook(book) {
    setData((prev) => [book, ...prev]);
  }

  function handleDeleteBook(id) {
    setData((prev) => prev.filter((x) => x.id !== id));
  }

  const filteredBooks = data.filter(
    (book) =>
      book.firstName.toLowerCase().includes(searchTitle.toLowerCase()) ||
      book.lastName.toLowerCase().includes(searchTitle.toLowerCase()) ||
      book.phone.includes(searchTitle)
  );

  return (
    <>
      <TaskSearch searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <BookForm onAddBook={handleAddBook} />
      <BookList
        books={filteredBooks}
        onDeleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
      />
    </>
  );
}

export default ToDoContainer;
