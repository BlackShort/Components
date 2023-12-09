import { useState, useEffect, useRef } from "react";
import { img1, img2, img3, img4, img5 } from '../assets';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide(next => (next === 4 ? 0 : next + 1));
        }, 2000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handlePrevClick = () => {
        setCurrentSlide(prev => (prev === 0 ? 4 : prev - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide(next => (next === 4 ? 0 : next + 1));
    };

    const images = [
        { img: img1, alt: "image1" },
        { img: img2, alt: "image2" },
        { img: img3, alt: "image3" },
        { img: img4, alt: "image4" },
        { img: img5, alt: "image5" },
    ];

    return (
        <div className="bg-neutral-600 w-full h-[100vh] flex items-center justify-center">
            <div className="w-[800px] h-[400px] bg-neutral-500 rounded-xl flex overflow-hidden border relative">
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        className={`object-cover absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                <button
                    type="button"
                    className="absolute top-[45%] left-0 p-4 text-white bg-black rounded-tr-lg rounded-br-lg opacity-50 hover:opacity-75"
                    onClick={handlePrevClick}
                >
                    <svg fill="currentColor"
                        className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                        <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
                    </svg>
                </button>
                <button
                    type="button"
                    className="absolute top-[45%] right-0 p-4 text-white bg-black rounded-tl-lg rounded-bl-lg opacity-50 hover:opacity-75"
                    onClick={handleNextClick}
                >
                    <svg fill="currentColor"
                        className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 .1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                    </svg>
                </button>
                <div className="absolute w-full bottom-0 flex justify-center space-x-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full bg-white opacity-50 ${index === currentSlide ? "opacity-100" : ""
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
