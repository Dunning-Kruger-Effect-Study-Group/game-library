import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Base: FC = () => {
  return (
    <div className="flex flex-col p-4 items-center min-h-[70vh] w-full bg-Blue_Gray text-Baby_Blue">
      <Outlet/>
    </div>
  );
};
