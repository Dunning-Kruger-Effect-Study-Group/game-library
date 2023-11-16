import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { Overlay } from './overlay';

export const Base: FC = () => {
  return (
    <div className="flex flex-col items-center min-h-[100vh] w-full bg-Blue_Gray text-Baby_Blue">
      <Header />
      <Outlet />
      <Footer />
      <Overlay/>
    </div>
  );
};
