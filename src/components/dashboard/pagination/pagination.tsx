import { Button } from '@/components/ui/button';

const Pagination = () => {
    return (
        <div className="flex justify-between gap-2.5 p-5 mt-5">
            <Button className="py-[5px] px-[15px] bg-gray-200 hover:bg-gray-300 text-[#2e374a] rounded-[5px] transition">
                Previous
            </Button>
            <Button className="py-[5px] px-[15px] bg-[#12994A] hover:bg-[#1BB85A] text-white rounded-[5px] transition">
                Next
            </Button>
        </div>
    );
};

export default Pagination;
