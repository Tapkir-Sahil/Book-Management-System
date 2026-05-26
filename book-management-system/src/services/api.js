import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getBooks = async () => {
  return await api.get("/books");
};

export const addBook = async (bookData) => {
  return await api.post("/books", bookData);
};

export const updateBook = async (id, bookData) => {
  return await api.put(`/books/${id}`, bookData);
};

export const deleteBook = async (id) => {
  return await api.delete(`/books/${id}`);
};