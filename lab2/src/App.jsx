import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [toDos, setToDos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const t = {
      id: Date.now(),
      title: title,
    };

    //прев всі поточні значення які є в списку
    //t новий елемент, ...прев всі попередні значення
    setToDos((prev) => [t, ...prev]);

    setTitle('');
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function onDelete(id) {
    setToDos((prev) => prev.filter((x) => x.id !== id));
  }

  function handleSearch(event) {
    setSearchTitle(event.target.value);
  }

  const filtered = toDos.filter((x) =>
    x.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <>
      <div>
        <input type="text" value={searchTitle} onChange={handleSearch} />
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <div>
        <ul>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <li key={t.id}>
                <span>{t.title}</span>
                <button onClick={() => onDelete(t.id)}>Delete</button>
              </li>
            ))
          ) : (
            <p>No data</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
