function Lists() {
  // book list array
  const bookListData = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    {
      id: 8,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
    },
    { id: 9, title: 'The Shining', author: 'Stephen King' },
    { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown' },
    
  ]

  const listItems = bookListData.map((book) => (
    <li key={book.id}>
      <strong>{book.title}</strong> by {book.author}
    </li>
  ))

  return <ul>{listItems}</ul>
}

export default Lists
