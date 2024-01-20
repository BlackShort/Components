import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

// Add this css to your

// .infiniteScroll {
//     animation: scroll 15s linear infinite;
// }

// .infiniteScroll:hover {
//     animation-play-state: paused;
// }

// @keyframes scroll {
//     0% {
//         transform: translateY(25em);
//     }

//     20% {
//         transform: translateY(1%);
//     }

//     100% {
//         transform: translateY(-100%);
//     }
// }

export const NoticeBox = ({ notices }) => {
    return ( 
        <div className='flex flex-col md:w-[25%] h-[30em] md:h-full rounded-md bg-slate-200 border border-neutral-500 overflow-hidden gap-2'>
            <div className="h-max text-xl text-neutral-50 font-medium bg-blue-500 border-b-2 border-blue-700 rounded-md shadow-md backdrop-blur-xl px-4 pt-1 pb-2 m-1">Important Notices</div>
            <div className="h-[90%] items-end justify-end overflow-hidden rounded-md px-1 py-2">
                <div className={`flex flex-col gap-3 infiniteScroll`}>
                    {notices.map((item) => (
                        <Link to={'/'} key={item.id} className="flex flex-col bg-slate-500/20 border border-neutral-500/20 rounded-md px-3 py-2 gap-3">
                            <div className='flex flex-row gap-3 items-center justify-between'>
                                <div className='flex h-max p-1 items-center gap-3'><BsInfoCircle fontSize={15} /> <span>Notice</span></div>
                                <p className="text-sm text-neutral-900 font-medium">{item.date}</p>
                            </div>
                            <p className="text-base text-neutral-900 font-normal">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

