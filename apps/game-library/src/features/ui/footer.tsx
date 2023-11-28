import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col p-4 items-center self-end justify-around bottom-0 bg-Midnight_Blue text-Baby_Blue h-28 w-full">
      <div>Made by <a href='https://discord.gg/nWN8N9yh7x' className="underline">Dunning-Krueger Effect</a></div>
      <div className='flex space-x-4'>
      <a href='https://discord.gg/nWN8N9yh7x'>
          <div className="flex justify-around items-center">
            <img
              className="h-5 w-h-5 pr-1"
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
              alt=""
            />
            Discord
          </div>
        </a>


        <a href='https://github.com/Dunning-Kruger-Effect-Study-Group/game-library'>
          <div className="flex justify-around items-center">
            <img
              className="h-6 w-h-6 pr-1"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
              alt=""
            />
            Repository
          </div>
        </a>
      </div>
    </footer>
  );
};
