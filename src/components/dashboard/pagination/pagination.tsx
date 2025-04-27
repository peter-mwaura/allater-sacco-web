import { Button } from '@/components/ui/button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
}: PaginationProps) => {
    return (
        <div className="flex justify-between gap-2.5 p-5 mt-5">
            <Button
                className="py-[5px] px-[15px] bg-gray-200 hover:bg-gray-300 text-[#2e374a] rounded-[5px] transition"
                onClick={onPrevious}
                disabled={currentPage === 1} // Disable if we're on the first page
            >
                Previous
            </Button>
            <Button
                className="py-[5px] px-[15px] bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition"
                onClick={onNext}
                disabled={currentPage === totalPages} // Disable if we're on the last page
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
