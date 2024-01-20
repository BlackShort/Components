import { useEffect, useState } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbLivePhoto } from "react-icons/tb";


export const Announcement = () => {
    // Update the state with first id or maintain the naming convension of id's
    const [selectedTab, setSelectedTab] = useState("tab1");
    // State for storing deails of the selected tab
    const [details, setDetails] = useState("");

    const Tabs = [
        {
            id: "tab1",
            icon: <TbLivePhoto fontSize={20} />,
            label: "Tab1",
        },
        {
            id: 'tab2',
            icon: <CgFileDocument fontSize={20} />,
            label: 'Tab2',
        },
        {
            id: "tab3",
            icon: <CgFileDocument fontSize={20} />,
            label: "Tab3",
        },
        {
            id: "tab4",
            icon: <CgFileDocument fontSize={20} />,
            label: "Tab4",
        },
    ];

    const Tabsinfo = [
        {
            id: "tab1",
            accouncements: [
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
            ]
        },
        {
            id: 'tab2',
            accouncements: [
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                
            ]
        },
        {
            id: "tab3",
            accouncements: [
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
            ]
        },
        {
            id: "tab4",
            accouncements: [
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
            ]
        },
    ];

    const Tabs1 = Tabs.slice(0, Tabs.length / 2);
    const Tabs2 = Tabs.slice(Tabs.length / 2);

    useEffect(() => {
        const data = Tabsinfo.find((item) => (item.id === selectedTab));
        setDetails(data);
    }, [selectedTab]);

    return (
        <div className='w-[96%] md:w-[90%] h-[40em] md:h-[30em] flex flex-col rounded-md bg-slate-200 border border-neutral-500 gap-3 overflow-hidden'>
            <div className="flex w-auto flex-wrap bg-slate-500/20 rounded-md m-2 gap-[0.1em]">
                <TabsHead Tabs={Tabs1} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <TabsHead Tabs={Tabs2} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>
            <div className="OverflowDiv flex flex-col gap-2 overflow-y-auto rounded-md ml-2 mb pb-2 ">
                {
                    (() => {
                        switch (selectedTab) {
                            case 'tab1':
                                return <TagsDetials data={details} />;
                            case 'tab2':
                                return <TagsDetials data={details} />;
                            case 'Instruction':
                                return <TagsDetials data={details} />;
                            case 'tab3':
                                return <TagsDetials data={details} />;
                            case 'tab4':
                                return <TagsDetials data={details} />;
                            default:
                                return <TagsDetials data={details} />;
                        }
                    })()
                }
            </div>
        </div>
    )
}

const TabsHead = ({ Tabs, selectedTab, setSelectedTab }) => {
    return (
        <>
            {Tabs.map((item) => (
                <div
                    // items-center gap-2 px-6 py-2 cursor-pointer transition-all ease-linear 
                    key={item.id}
                    onClick={() => setSelectedTab(item.id)}
                    className={`flex items-center flex-auto rounded-md gap-2 px-5 py-2 cursor-pointer ${selectedTab === item.id ? 'bg-green-500 hover:bg-green-600' : 'bg-transparent hover:bg-neutral-900/20'}`}
                >
                    <span>{item.icon}</span>
                    <p className='font-normal text-lg tracking-wide'>{item.label}</p>
                </div>
            ))}
        </>
    )
}

const TagsDetials = ({ data }) => {
    return (
        <div className='flex flex-col w-full h-full gap-4 pr-2'>
            {
                data?.accouncements?.map((item, index) => (
                    <div key={index} className="flex bg-slate-500/20 rounded-md p-3 gap-3">
                        <div className='flex h-max p-1'><IoCheckmarkCircleOutline fontSize={40} /></div>
                        <p key={`${item.id - index}`} className="text-base text-neutral-900 font-normal">{item.content}</p>
                    </div>
                ))
            }
        </div>
    );
};
