import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="flex flex-row p-4 items-center justify-around relative top-0 bg-Midnight_Blue text-Baby_Blue h-28 w-full">
      <Link
        to={'/'}
        className="p-4 bg-Dark_Blue hover:bg-Blue_Gray active:bg-Dark_Blue"
      >
        Games
      </Link>
      <Link
        to="platforms"
        className="p-4 bg-Dark_Blue hover:bg-Blue_Gray active:bg-Dark_Blue"
      >
        Platforms
      </Link>
      <Link
        to="companies"
        className="p-4 bg-Dark_Blue hover:bg-Blue_Gray active:bg-Dark_Blue"
      >
        Companies
      </Link>
    </header>
  );
};
