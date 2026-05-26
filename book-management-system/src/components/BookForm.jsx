import { useEffect, useState } from "react";
import { genres } from "../constants/genres";
import toast from "react-hot-toast";

const initialState = {
  title: "",
  author: "",
  genre: "",
  year: "",
};

const BookForm = ({ onSubmit, editingBook }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingBook) {
      setFormData(editingBook);
    } else {
      setFormData(initialState);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.genre ||
      !formData.year
    ) {
      toast.error("Please fill all fields");
      return;
    }

    onSubmit(formData);

    setFormData(initialState);
  };

  return (
    <form
      id="book-form"
      onSubmit={handleSubmit}
      className="
          bg-white
          p-6
          rounded-2xl
          shadow-sm
          border
          border-gray-200
          mb-8
          "
    >
      <h2 className="text-2xl font-bold mb-5 text-gray-800">
        {editingBook && (
  <div
    className="
      inline-block
      bg-yellow-100
      text-yellow-700
      px-3
      py-1
      rounded-full
      text-sm
      font-medium
      mb-4
    "
  >
    Editing Mode
  </div>
)}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select Genre</option>

          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="year"
          placeholder="Publication Year"
          value={formData.year}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <button
        className="
          bg-blue-600
          hover:bg-blue-700
          active:scale-95
          transition-all
          duration-200
          text-white
          font-medium
          px-6
          py-3
          rounded-xl
          mt-5
          shadow-md
          hover:shadow-lg
          cursor-pointer
        "
      >
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
};

export default BookForm;
