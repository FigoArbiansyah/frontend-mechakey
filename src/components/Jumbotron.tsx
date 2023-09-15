import React from 'react';

interface JumbotronProps {
    title: string;
    description: string;
    linkTo: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, description, linkTo }) => {
  return (
    <div className='bg-mecha min-h-screen grid place-items-center'>
        <div className='text-center'>
            <div>
                <h1 className="text-6xl font-bold text-white">{title}</h1>
                <p className="mt-5 text-white text-lg">{description}</p>
            </div>
            <div className="mt-10 flex justify-center">
                <a href={linkTo} className='py-3 px-5 flex gap-3 items-center bg-rose-500 text-white rounded text-lg'>
                    <span>Browse Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Jumbotron;