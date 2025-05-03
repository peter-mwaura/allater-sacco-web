import { MdSupervisedUserCircle } from 'react-icons/md';

interface CardProps {
    title: string;
    number: string | number;
}

const Card = ({ title, number }: CardProps) => {
    return (
        <div className="bg-[#12994A] text-white p-5 rounded-lg shadow-md flex gap-5 cursor-pointer w-full hover:bg-[#1BB85A] transition-colors duration-300">
            <MdSupervisedUserCircle
                size={32}
                className="text-white opacity-90"
            />
            <div className="flex flex-col gap-2">
                <span className="text-sm text-white opacity-70">{`Total ${title}`}</span>
                <span className="text-2xl font-semibold">{number}</span>
                <span className="text-xs text-white opacity-80">
                    <span className="text-lime-400 font-semibold">12%</span>{' '}
                    more than previous weeks
                </span>
            </div>
        </div>
    );
};

export default Card;
