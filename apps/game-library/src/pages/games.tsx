import { IGameData } from '@game-library/types';
import { GameCard } from '../features/collection/gameCard';
import { CompanyCard } from '../features/collection/companyCard';
import { show } from '../redux/slices/ui/overlaySlice';
import { useAppDispatch } from '../redux/hooks';



export function Games() {
  const dispatch = useAppDispatch();

  const arr: Array<IGameData> = [
    {
      coverArt:
        'https://upload.wikimedia.org/wikipedia/en/3/3a/Diablo_Coverart.png',
      name: 'Diablo',
      releases: [
        { platform: 'asdw', releaseDate: new Date('01/03/1997') },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-Dark_Blue  mt-1">
        <button
          onClick={(e) => {
            dispatch(show());
          }}
          className="p-4 hover:bg-Baby_Blue hover:text-Dark_Blue"
        >
          New
        </button>
      </div>
    <div className="w-full h-full grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {arr.map((game) => {
        return <GameCard gameData={game}></GameCard>;
      })}
    </div>
    </div>
  );
}
