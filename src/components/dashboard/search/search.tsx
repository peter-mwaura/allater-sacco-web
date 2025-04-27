import { Input } from '@/components/ui/input';
import { MdSearch } from 'react-icons/md';

interface SearchProps {
    placeholder: string;
    onSearch: (searchTerm: string) => void; // Adding the onSearch prop
}

const Search = ({ placeholder, onSearch }: SearchProps) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value); // Trigger the onSearch function with the input value
    };

    return (
        <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-[10px] w-max">
            <MdSearch className="text-white" />
            <Input
                className="bg-transparent border-none text-white outline-none"
                type="text"
                placeholder={placeholder}
                onChange={handleSearchChange} // Attach onChange handler
            />
        </div>
    );
};

export default Search;
