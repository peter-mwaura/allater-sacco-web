import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const Rightbar = () => {
    return (
        <div className="sticky top-10">
            <div className="relative bg-gradient-to-br from-[#12994A] to-[#1BB85A] p-5 rounded-[10px] mb-5 text-white shadow-md">
                <div className="absolute bottom-0 right-0 w-[50%] h-[50%] pointer-events-none">
                    <Image
                        className="object-contain opacity-20"
                        src="/images/astronaut.png"
                        alt=""
                        fill
                    />
                </div>
                <div className="flex flex-col gap-4 z-10 relative">
                    <span className="font-bold text-sm">🔥 Available Now</span>
                    <h3 className="font-semibold text-base">
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className="text-sm opacity-90">
                        Takes 4 minutes to learn
                    </span>
                    <p className="text-sm opacity-90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae
                        possimus.
                    </p>
                    <button className="flex items-center gap-2.5 px-4 py-2 bg-white text-[#12994A] font-medium rounded-[5px] w-max hover:bg-gray-100 transition">
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>

            <div className="relative bg-gradient-to-br from-[#12994A] to-[#1BB85A] p-5 rounded-[10px] text-white shadow-md">
                <div className="flex flex-col gap-4 z-10 relative">
                    <span className="font-bold text-sm">🚀 Coming Soon</span>
                    <h3 className="font-semibold text-base">
                        New server actions are available, partial pre-rendering
                        is coming up!
                    </h3>
                    <span className="text-sm opacity-90">
                        Boost your productivity
                    </span>
                    <p className="text-sm opacity-90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae
                        possimus.
                    </p>
                    <button className="flex items-center gap-2.5 px-4 py-2 bg-white text-[#12994A] font-medium rounded-[5px] w-max hover:bg-gray-100 transition">
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
