const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded"
    />
  );
};

export default SearchBar;