import { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

export const Accordion = () => {
  const questions = [
    {
      id: 1,
      ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi, eius qui, accusantium suscipit ipsa quam dolor minima nemo cupiditate laudantium ducimus voluptate hic mollitia blanditiis, id sit? Debitis, beatae!"
    },
    {
      id: 2,
      ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi, eius qui, accusantium suscipit ipsa quam dolor minima nemo cupiditate laudantium ducimus voluptate hic mollitia blanditiis, id sit? Debitis, beatae!"
    },
    {
      id: 3,
      ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi, eius qui, accusantium suscipit ipsa quam dolor minima nemo cupiditate laudantium ducimus voluptate hic mollitia blanditiis, id sit? Debitis, beatae!"
    },
    {
      id: 4,
      ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi, eius qui, accusantium suscipit ipsa quam dolor minima nemo cupiditate laudantium ducimus voluptate hic mollitia blanditiis, id sit? Debitis, beatae!"
    },
    {
      id: 5,
      ques: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi, eius qui, accusantium suscipit ipsa quam dolor minima nemo cupiditate laudantium ducimus voluptate hic mollitia blanditiis, id sit? Debitis, beatae!"
    },
  ];

  return (
    <div className='flex w-full items-center justify-center bg-slate-200 py-10'>
      <div className='flex flex-col w-[80%] border border-neutral-500 shadow-md gap-8 px-5 py-6 rounded-lg'>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl lg:text-3xl text-neutral-900 font-semibold">Frequently Asked Questions</p>
        </div>
        <QuesAns questions={questions} />
      </div>
    </div>
  )
}

const QuesAns = ({ questions }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-5">
      {questions.map((item) => (
        <div key={item.id} className='bg-slate-500/20 border border-neutral-500/20 rounded-md transition-all ease-in-out overflow-hidden'>
          <div
            onClick={() => toggleAccordion(item.id)}
            className='cursor-pointer flex items-center justify-between bg-slate-500/10 border-b border-neutral-900/50 px-4 py-2 gap-3'
          >
            <span>{item.ques}</span>
            <span>{openAccordion === item.id ? <IoIosArrowUp fontSize={20} /> : <IoIosArrowDown fontSize={20} />}</span>
          </div>
          <div className={`overflow-hidden transition-max-height ease-in-out ${openAccordion === item.id ? 'h-max' : 'max-h-0'}`}>
            <p className="cursor-default text-base text-neutral-900 font-normal px-4 py-2">{item.ans}</p>
          </div>
        </div>
      ))}
    </div>
  );
};