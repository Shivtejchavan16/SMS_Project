const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
};

export default SearchBar;