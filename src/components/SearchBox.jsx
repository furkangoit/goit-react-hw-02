const SearchBox = ({ value, onChange }) => {
    return (
        <div className="search-box">
            <label htmlFor="search">Find contacts by name:</label>
            <input
                type="text"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search contacts..."
            />
        </div>
    )
}

export default SearchBox