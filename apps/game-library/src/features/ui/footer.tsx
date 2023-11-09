import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col p-4 items-center self-end justify-around bottom-0 bg-Midnight_Blue text-Baby_Blue h-28 w-full">
      <div>made in 2023 by João Schoen</div>
      <a href='https://github.com/joaoschoen/game-library'>
        <div className="flex justify-around items-center">
          <img
            className="h-6 w-h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
            alt=""
          />
          Repository
        </div>
      </a>
    </footer>
  );
};
