import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import SearchFilter from "../components/SearchFilter";
import toast from "react-hot-toast";

import { getBooks, addBook, updateBook, deleteBook } from "../services/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await getBooks();

      setBooks(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddOrUpdate = async (bookData) => {
    try {
      if (editingBook) {
        await updateBook(editingBook.id, bookData);
        toast.success("Book Updated Successfully");
        setEditingBook(null);
      } else {
        await addBook(bookData);
        toast.success("Book Added Successfully");
      }

      fetchBooks();
    } catch (error) {
      console.log(error);
      toast.error("Operation failed");
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);

    const formSection = document.getElementById("book-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?",
    );

    if (!confirmDelete) return;

    try {
      await deleteBook(id);
      toast.success("Book Deleted Successfully");
      fetchBooks();
    } catch (error) {
      console.log(error);
      toast.error("Delete failed");
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre = genreFilter === "" || book.genre === genreFilter;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          My Book Collection
        </h1>

        <p className="text-gray-500 text-lg">
          Add, manage and organize your favorite books.
        </p>
      </div>
      <BookForm onSubmit={handleAddOrUpdate} editingBook={editingBook} />

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />

      {loading ? (
        <Loader />
      ) : books.length === 0 ? (
        <div
          className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No matching books found
          </h2>

          <p className="text-gray-500">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
