import { ICompany, IGameData } from '@game-library/types';
import { CompanyCard } from '../features/collection/companyCard';
import { useAppDispatch } from '../redux/hooks';
import { show } from '../redux/slices/ui/overlaySlice';

function Companies() {
  const dispatch = useAppDispatch();

  const arr: Array<ICompany> = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Blizzardnorth.png',
      name: 'Blizzard North',
      founded: new Date('01/01/1993'),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-Dark_Blue  mt-1">
        <button onClick={(e)=>{dispatch(show())}} className="p-4 hover:bg-Baby_Blue hover:text-Dark_Blue">
          New
        </button>
      </div>
      <div className="w-full h-full grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {arr.map((company) => {
          return <CompanyCard companyData={company}></CompanyCard>;
        })}
      </div>
    </div>
  );
}

export default Companies;
