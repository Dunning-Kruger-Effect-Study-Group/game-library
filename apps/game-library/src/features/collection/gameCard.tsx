import { IGameData } from '@game-library/types';
import { FC } from 'react';

export const GameCard: FC<IGameData> = ({ coverArt, releaseDate, name }) => {
  return (
    <figure className="flex flex-col m-2 border-[3px] border-Baby_Blue items-center bg-Midnight_Blue text-Baby_Blue">
      <div className="absolute self-end bg-Dark_Blue border-b-[3px] border-l-[3px] p-1">
        {releaseDate !== undefined && new Date(releaseDate).getFullYear()}
      </div>
      <img className="h-full w-full" src={coverArt} alt={name} />
      <figcaption className="text-center">{name}</figcaption>
    </figure>
  );
};
