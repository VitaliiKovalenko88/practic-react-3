import { useState } from "react";

export const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("write something please!!!");
      return;
    }

    props.onSubmite(query);

    setQuery("");
  };

  const handleNameChange = (e) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmite}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleNameChange}
      />
      <button type="submit">search</button>
    </form>
  );
};
