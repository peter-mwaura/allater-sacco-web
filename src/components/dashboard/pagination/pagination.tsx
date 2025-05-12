import { Button } from '@/components/ui/button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    // Handle previous page click
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Handle next page click
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-5 mt-5">
            <Button
                onClick={handlePreviousPage}
                className="py-[5px] px-[15px] bg-gray-200 hover:bg-gray-300 text-[#2e374a] rounded-[5px] transition cursor-pointer disabled:opacity-50"
                disabled={currentPage === 1}
            >
                Previous
            </Button>

            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>

            <Button
                onClick={handleNextPage}
                className="py-[5px] px-[15px] bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition cursor-pointer disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
