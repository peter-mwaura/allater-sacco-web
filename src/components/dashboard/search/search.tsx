import { Input } from '@/components/ui/input';
import { MdSearch } from 'react-icons/md';

interface SearchProps {
    placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
    return (
        <div className="flex items-center gap-2.5 bg-[#2e374a] p-2.5 rounded-[10px] w-max">
            <MdSearch className="" />
            <Input
                className="bg-transparent border-none text-white outline-none"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Search;
