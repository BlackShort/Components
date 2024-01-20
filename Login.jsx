import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";

export const Login = () => {
    const [selectedTab, setSelectedTab] = useState("login");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const SendFormData = (e) => {
        e.preventDefault();
        setUser({
            name: "",
            email: "",
            password: "",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const switchTab = (tab) => {
        setSelectedTab(tab);
        setUser({
            name: "",
            email: "",
            password: "",
        });
    };

    const Tabname = [
        { id: "login", title: "Login" },
        { id: "signup", title: "Sign up" },
    ];

    const Fields = {
        login: [
            { type: "email", icon: <IoMdMail fontSize={20} />, label: "email", placeholder: "Enter your email", isRequired: true },
            { type: "password", icon: <MdLock fontSize={22} />, label: "password", placeholder: "Enter your password", isRequired: true },
        ],
        signup: [
            { type: "text", icon: <FaUser fontSize={20} />, label: "name", placeholder: "Enter your name", isRequired: true },
            { type: "email", icon: <IoMdMail fontSize={20} />, label: "email", placeholder: "Enter your email", isRequired: true },
            { type: "password", icon: <MdLock fontSize={22} />, label: "password", placeholder: "Enter your password", isRequired: true },
        ],
    };

    return (
        <div className="flex w-full h-full items-center justify-center">
            <div className="flex flex-col max-w-full w-[340px] h-[400px] bg-slate-200  border border-neutral-900/30 rounded-md gap-4 p-2">
                <TabsHead Tabname={Tabname} selectedTab={selectedTab} switchTab={switchTab} />
                <Tabs user={user} SendFormData={SendFormData} selectedTab={selectedTab} setSelectedTab={setSelectedTab} field={Fields[selectedTab]} handleInputChange={handleInputChange} switchTab={switchTab} />
            </div>
        </div>
    );
};

const TabsHead = ({ Tabname, selectedTab, switchTab }) => {
    return (
        <div className="flex w-auto flex-wrap bg-neutral-900/20 rounded-md cursor-default p-1 gap-1">
            {Tabname.map((item) => (
                <div
                    key={item?.id}
                    onClick={() => switchTab(item?.id)}
                    className={`flex items-center justify-center flex-auto rounded-md gap-2 px-5 py-1 cursor-pointer ${selectedTab === item?.id ? 'bg-green-500 hover:bg-green-600' : 'bg-transparent hover:bg-slate-500/20'}`}
                >
                    <p className='font-normal text-lg tracking-wide'>{item?.title}</p>
                </div>
            ))}
        </div>
    );
};

const Tabs = ({ user, selectedTab, field, SendFormData, handleInputChange, switchTab }) => {
    return (
        <form onSubmit={SendFormData} method="post" className="flex w-full flex-col gap-8 mt-2">
            <div className="flex flex-col w-full items-center justify-center gap-4">
                {field.map((item) => (
                    <Input
                        key={item.label}
                        type={item?.type}
                        icon={item?.icon}
                        label={item?.label}
                        placeholder={item?.placeholder}
                        isRequired={item?.isRequired}
                        onChange={handleInputChange}
                        value={user[item?.label]}
                    />
                ))}
            </div>

            <div className="flex w-full items-center justify-center flex-col gap-2">
                {(selectedTab === "login") ? (
                    <p className="text-center text-small">
                        <span>Need to create an account?{" "}</span>
                        <span className="text-blue-800 cursor-pointer" onClick={() => switchTab("signup")}>Sign up</span>
                    </p>
                ) : (
                    <p className="text-center text-small">
                        <span>Already have an account?{" "}</span>
                        <span className="text-blue-800 cursor-pointer" onClick={() => switchTab("login")}>Login</span>
                    </p>
                )}
                <button type="submit" className='text-nowrap w-[50%] text-neutral-50 bg-blue-500 hover:bg-blue-600 transition-all ease-in-out rounded-md py-2 px-5'>{(selectedTab === "login") ? "Login" : "Sign up"}</button>
            </div>
        </form>
    );
};

const Input = ({ type, icon, label, placeholder, isRequired, onChange, value }) => {
    return (
        <div className="flex flex-row w-full items-center border border-neutral-500/20 shadow-xl bg-neutral-700/20 backdrop-blur-xl backdrop-saturate-200 !cursor-text rounded-md gap-3 px-3 py-2">
            <span className="text-black/50">{icon}</span>
            <input
                type={type}
                name={label}
                placeholder={placeholder}
                required={isRequired}
                onChange={onChange}
                value={value}
                className="flex-1 text-black/900 bg-transparent placeholder:text-neutral-900/50 outline-none"
            />
        </div>
    );
};
