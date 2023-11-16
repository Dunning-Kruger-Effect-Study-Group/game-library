import { IPlatform } from '@game-library/types';
import { PlatformCard } from '../features/collection/platformCard';

function Home() {
  const arr: Array<IPlatform> = [
    {
      name: 'Windows 98',
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Microsoft_Windows_98_logo_with_wordmark.svg/800px-Microsoft_Windows_98_logo_with_wordmark.svg.png",
      releaseDate: new Date("01/01/1998"),
    },
  ];

  return (
    <div className="w-full h-full grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {arr.map((platform) => {
        return <PlatformCard platformData={platform}></PlatformCard>;
      })}
    </div>
  );
}

export default Home;
