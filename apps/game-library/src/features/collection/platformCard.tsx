import { ICompany, IPlatform } from '@game-library/types';
import { FC } from 'react';

export const PlatformCard: FC<{ platformData: IPlatform }> = ({ platformData }) => {
  return (
    <figure className="flex flex-col m-2 border-[3px] border-Baby_Blue items-center bg-Midnight_Blue text-Baby_Blue">
      <div className="absolute self-end bg-Dark_Blue border-b-[3px] border-l-[3px] p-1">
        
          {new Date(platformData.releases[0].releaseDate).getFullYear()}
      </div>
      <img className="h-full w-full" src={platformData.logo} alt={platformData.name} />
      <figcaption className="text-center">{platformData.name}</figcaption>
    </figure>
  );
};
