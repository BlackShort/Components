import { img1, img2, img3, img4, img5 } from "./assets";

const Card = ({ images }) => {
    const images = [
        { img: img1, alt: "image1" },
        { img: img2, alt: "image2" },
        { img: img3, alt: "image3" },
        { img: img4, alt: "image4" },
        { img: img5, alt: "image5" },
    ];

    return (
        <>
            {
                images.map((item, index) => (
                    <div key={index} className='bg-neutral-400 w-[250px] rounded-lg border border-neutral-800 flex flex-col items-center justify-between overflow-hidden'>
                        <img src={item.img} alt={item.alt} className='w-full h-[130px]' />
                        <h2 className='w-full font-semibold text-xl p-3 text-left'>Python</h2>
                        <p className='text-base p-3 text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, temporibus?</p>
                        <button className='w-[90%] mb-2 rounded-full px-5 py-2 bg-neutral-600 text-lg'>Learn</button>
                    </div>
                ))
            }
        </>
    )
}

export default Card