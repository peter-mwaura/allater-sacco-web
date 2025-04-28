// components/dashboard/search/search.tsx
import React from 'react';

interface SearchProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            className="p-2 border border-gray-300 rounded-md"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Search;
