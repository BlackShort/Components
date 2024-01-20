import { CgFileDocument } from 'react-icons/cg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export const LinksCard = () => {

    const Tabsinfo = [
        {
            id: 'heading1',
            icon: <CgFileDocument fontSize={20} />,
            label: "Heading",
            links: [
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
                {
                    title: "New Link",
                    link: '/',
                },
            ]
        },
    ];

    return (
        <div className='w-full lg:w-96 h-full flex flex-col lg:flex-row bg-slate-200 overflow-y-auto rounded-md gap-8 lg:gap-4'>
            <TabDetails data={Tabsinfo[0]} />
        </div>
    )
}

const TabDetails = ({ data }) => {
    return (
        <div className='flex flex-col w-full items-center justify-between rounded-md border border-neutral-500 shadow-md gap-5 p-1 overflow-hidden'>
            <div className={`flex w-full items-center justify-center gap-2 p-2 rounded-md cursor-default transition-all ease-linear bg-blue-500  border-b-2 border-blue-700 text-neutral-50`}>
                <p className='font-medium text-xl text-center tracking-wide'>{data?.label}</p>
            </div>
            <div className='flex flex-col w-full h-full gap-3 p-1'>
                {
                    data?.links?.map((item, index) => (
                        <Link to={item?.link} key={index} className="flex justify-between bg-slate-500/20 border border-neutral-500/20 rounded-md transition-all ease-in-out px-4 py-2 gap-3 hover:pr-3">
                            <p className="text-base text-neutral-900 font-normal">{item.title}</p>
                            <div className='flex h-max p-1'><IoIosArrowRoundForward fontSize={20} /></div>
                        </Link>
                    ))
                }
            </div>
        </div >
    );
};
