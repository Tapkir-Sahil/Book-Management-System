import { FaEdit, FaTrash } from "react-icons/fa";

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        animate-[fadeIn_0.3s_ease-in-out]
      "
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {book.title}
        </h2>

        <div className="space-y-2 text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">
              Author:
            </span>{" "}
            {book.author}
          </p>

          <p>
            <span className="font-semibold text-gray-800">
              Genre:
            </span>{" "}
            <span
              className="
                inline-block
                bg-blue-100
                text-blue-700
                px-3
                py-1
                rounded-full
                text-sm
                font-medium
              "
            >
              {book.genre}
            </span>
          </p>

          <p>
            <span className="font-semibold text-gray-800">
              Year:
            </span>{" "}
            {book.year}
          </p>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => onEdit(book)}
          className="
            flex
            items-center
            gap-2
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            px-4
            py-2
            rounded-xl
            transition-all
            duration-200
            active:scale-95
            shadow-sm
            cursor-pointer
          "
        >
          <FaEdit />
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          className="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl
            transition-all
            duration-200
            active:scale-95
            shadow-sm
            cursor-pointer
          "
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;