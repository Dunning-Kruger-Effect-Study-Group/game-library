import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="flex flex-col p-4 items-center relative top-0 bg-Midnight_Blue text-Baby_Blue h-28 w-full">
      <button onClick={()=>{
        console.log("add game")
      }} className='p-4 bg-Dark_Blue hover:bg-Blue_Gray active:bg-Dark_Blue'>
        + Add Game
      </button>
    </header>
  );
};
