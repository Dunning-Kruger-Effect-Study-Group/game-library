import { IGameData } from '@game-library/types';
import { FC } from 'react';

export const GameCard: FC<{ gameData: IGameData }> = ({ gameData }) => {
  return (
    <figure className="flex flex-col m-2 border-[3px] border-Baby_Blue items-center bg-Midnight_Blue text-Baby_Blue">
      <div className="absolute self-end bg-Dark_Blue border-b-[3px] border-l-[3px] p-1">
        {gameData.releases[0] !== undefined &&
          new Date(gameData.releases[0].releaseDate).getFullYear()}
      </div>
      <img className="h-full w-full" src={gameData.coverArt} alt={gameData.name} />
      <figcaption className="text-center">{gameData.name}</figcaption>
    </figure>
  );
};
