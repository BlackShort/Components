import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className='flex items-center justify-center w-full mt-10'>
            <div className="flex flex-col w-full bg-slate-200 p-4 gap-10">
                <div className="flex flex-col md:flex-row w-full gap-10">
                    <div className="flex flex-col w-full md:w-[40%] justify-between gap-3">
                        <div className="flex flex-col">
                            <p className="text-2xl lg:text-4xl text-neutral-900 font-semibold">BlackShort</p>
                            <p className="text-base lg:text-xl text-neutral-900 font-semibold">https://github.com/blackShort/</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center flex-row gap-3">
                                <IoMdMail fontSize={23} className="text-neutral-800/90" />
                                <p className="text-base lg:text-xl text-nowrap text-neutral-900 font-normal">example@gmail.com</p>
                            </div>
                            <div className="flex items-center flex-row gap-3">
                                <IoCall fontSize={23} className="text-neutral-800/90" />
                                <p className="text-base lg:text-xl text-nowrap text-neutral-900 font-normal">+91 1234567890</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <Link to={'/'}><FaWhatsapp fontSize={30} /></Link>
                            <Link to={'/'}><FaInstagram fontSize={30} /></Link>
                            <Link to={'/'}><FaFacebook fontSize={30} /></Link>
                            <Link to={'/'}><FaTwitter fontSize={30} /></Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-row  w-full md:w-[60%] justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <p className='font-medium text-2xl tracking-wide'>Heading</p>

                            <ul>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='font-medium text-2xl tracking-wide'>Heading</p>

                            <ul>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='font-medium text-2xl tracking-wide'>Heading</p>

                            <ul>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                                <li><a href="#">Link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-base text-center text-neutral-900 font-normal">Copyright &copy; blackShort 2024 | All rights reserved</p>
            </div>
        </div>
    )
}
