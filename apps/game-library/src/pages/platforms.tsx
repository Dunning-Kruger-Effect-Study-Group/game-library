import { IPlatform } from '@game-library/types';
import { PlatformCard } from '../features/collection/platformCard';
import { useActionData } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { show } from '../redux/slices/ui/overlaySlice';
import { CompanyCard } from '../features/collection/companyCard';


function Home() {
  const dispatch = useAppDispatch();

  const arr: Array<IPlatform> = [
    {
      name: 'Windows 98',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Microsoft_Windows_98_logo_with_wordmark.svg/800px-Microsoft_Windows_98_logo_with_wordmark.svg.png',
      releases: [
        {
          country: 'asdw',
          releaseDate: new Date('01/01/1998'),
        },
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
      {arr.map((platform) => {
        return <PlatformCard platformData={platform}></PlatformCard>;
      })}
      </div>
    </div>
  );
}

export default Home;
