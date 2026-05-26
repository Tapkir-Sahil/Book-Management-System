import { genres } from "../constants/genres";

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  genreFilter,
  setGenreFilter,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        gap-4
        mb-6
      "
    >
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 border border-gray-300 p-3 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        className="border border-gray-300 p-3 rounded-xl bg-white outline-none focus:ring-2   focus:ring-blue-500
"
      >
        <option value="">All Genres</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;